<script setup lang="ts">
import { inject } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import type { Member } from '@/interfaces';

const memberList = inject('memberList') as Map<number, Member>;

</script>

<template>
    <h1>会員管理</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>
                <RouterLink v-bind:to="{ name: 'AppTop' }">
                    TOP
                </RouterLink>
            </li>
            <li>会員リスト</li>
        </ul>
    </nav>
    <section>
        <h2>会員リスト</h2>
        <p>
            新規登録は
            <RouterLink v-bind:to="{name: 'MemberAdd'}">こちら</RouterLink>
            から
        </p>
        <section>
        <li v-for="[id, member] in memberList" v-bind:key="id">
            <RouterLink v-bind:to="{ name: 'MemberDetail', params: { id: id } }">
                IDが{{ id }}の{{ member.name }}さん
            </RouterLink>
        </li>
        </section>
        <RouterView />
    </section>
</template>
