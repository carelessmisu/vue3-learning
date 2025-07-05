import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Member } from '@/interfaces';

interface State {
  memberList: Map<number, Member>;
  isLoading: boolean;
}

let _database: IDBDatabase;
async function getDatabase(): Promise<IDBDatabase> {
  const promise = new Promise<IDBDatabase>((resolve, reject) => {
    if (_database != undefined) {
      resolve(_database);
    } else {
      const request = window.indexedDB.open('asyncdb', 1);
      request.onupgradeneeded = (event) => {
        const target = event.target as IDBOpenDBRequest;
        const database = target.result as IDBDatabase;
        database.createObjectStore('members', {
          keyPath: 'id',
        });
      };
      request.onsuccess = (event) => {
        const target = event.target as IDBOpenDBRequest;
        _database = target.result as IDBDatabase;
        resolve(_database);
      };
      request.onerror = (event) => {
        console.log('ERROR: DBをオープンできません。', event);
        reject(new Error('ERROR: DBをオープンできません。'));
      };
    }
  });
  return promise;
}

export const useMembersStore = defineStore('members', {
  state: (): State => {
    return {
      memberList: new Map<number, Member>(),
      isLoading: true,
    };
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.memberList.get(id) as Member;
        return member;
      };
    },
    isMemberListEmpty: (state): boolean => {
      return state.memberList.size === 0;
    },
  },
  actions: {
    async prepareMemberList(): Promise<boolean> {
      // データベースオブジェクトを取得
      const database = await getDatabase();
      const promise = new Promise<boolean>((resolve, reject) => {
        // トランザクションオブジェクトを取得
        const transaction = database.transaction('members', 'readonly');
        // membersオブジェクトストアを取得
        const objectStore = transaction.objectStore('members');
        // 空のmemberListを作成
        const memberList = new Map<number, Member>();
        // membersオブジェクトストアから全件取得
        const request = objectStore.openCursor();
        // データ取得が成功した場合の処理を登録
        request.onsuccess = (event) => {
          // カーソルオブジェクトを取得
          const target = event.target as IDBRequest;
          const cursor = target.result as IDBCursorWithValue;
          // カーソルが存在する場合
          if (cursor) {
            // カーソルからキーデータを取得
            const id = cursor.key as number;
            // カーソルから値データを取得
            const member = cursor.value as Member;
            // memberListに追加
            memberList.set(id, member);
            // 次のデータを取得
            cursor.continue();
          }
        };
        // トランザクションが成功した場合の処理を登録
        transaction.oncomplete = () => {
          // ステートにmemberListをセット
          this.memberList = memberList;
          // ステートのisLoadingをfalseにセット
          this.isLoading = false;
          // 成功を返す
          resolve(true);
        };
        // トランザクションが失敗した場合の処理を登録
        transaction.onerror = (event) => {
          console.log('ERROR: データ取得が失敗しました。', event);
          // 失敗を返す
          reject(new Error('ERROR: データ取得に失敗'));
        };
      });
      return promise;
    },
    async insertMember(member: Member): Promise<boolean> {
      // memberオブジェクト生成
      const memberAdd: Member = {
        ...member,
      };
      // データベースオブジェクトを取得
      const database = await getDatabase();
      const promise = new Promise<boolean>((resolve, reject) => {
        // トランザクションオブジェクトを取得
        const transaction = database.transaction('members', 'readwrite');
        // membersオブジェクトストアを取得
        const objectStore = transaction.objectStore('members');
        // membersオブジェクトストアにデータを追加
        objectStore.put(memberAdd);
        // トランザクションが成功した場合の処理を登録
        transaction.oncomplete = () => {
          // stateのmemberListにも追加
          this.memberList.set(memberAdd.id, memberAdd);
          // 非同期処理成功
          resolve(true);
        };
        // トランザクションが失敗した場合の処理を登録
        transaction.onerror = (event) => {
          console.log('ERROR: データ登録が失敗しました。', event);
          // 非同期処理失敗
          reject(new Error('ERROR: データ登録に失敗'));
        };
      });
      return promise;
    },
  },
});
