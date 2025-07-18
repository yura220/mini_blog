<template>
  <div class="neu-card">
    <h1>Mini Blog</h1>
    <router-link to="/new" class="new-button">새 글 작성</router-link>
    <ul>
      <li v-for="post in posts" :key="post.id" style="margin-top: 10px;">
        <router-link :to="`/post/${post.id}`" class="neu-button">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { usePostStore } from '../store/posts';
import './css/PostList.css'
const { posts } = usePostStore();
</script>
