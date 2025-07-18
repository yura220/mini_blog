<template>
    <div class="neu-card" v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <router-link :to="`/edit/${post.id}`" class="sub-button edit">수정</router-link>
      <button @click="handleDelete" class="sub-button delete" style="margin-left: 10px;">삭제</button>
    </div>
  </template>

  <script setup>
  import { useRouter, useRoute } from 'vue-router';
  import { usePostStore } from '../store/posts';
  import { computed } from 'vue';

  const router = useRouter();
  const route = useRoute();
  const store = usePostStore();

  const post = computed(() => store.getPostById(Number(route.params.id)));

  function handleDelete() {
    store.deletePost(post.value.id);
    router.push('/');
  }
  </script>
