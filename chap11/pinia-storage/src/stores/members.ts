import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Member } from '@/interfaces';

interface State {
  memberList: Map<number, Member>;
}

export const useMembersStore = defineStore('members', {
  state: (): State => {
    return {
      memberList: new Map<number, Member>(),
    };
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.memberList.get(id) as Member;
        return member;
      }
    },
    isMemberListEmpty: (state): boolean => {
      return state.memberList.size === 0;
    }
  },
  actions: {
    prepareMemberList(): void {
      let memberList = new Map<number, Member>();
      const memberListJsonStr = sessionStorage.getItem('memberList');
      if (memberListJsonStr) {
        const memberListJSON = JSON.parse(memberListJsonStr);
        memberList = new Map<number, Member>(memberListJSON);
      }
      this.memberList = memberList;
    },
    insertMember(member: Member): void {
      this.memberList.set(member.id, member);
      const memberListJSONStr = JSON.stringify([...this.memberList]);
      sessionStorage.setItem('memberList', memberListJSONStr);
    }
  },
});
