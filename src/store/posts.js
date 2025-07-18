import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostStore = defineStore('posts', () => {
  const posts = ref([
    { id: 1, title: '오늘의 날씨', content: '비가 왔다 안왔다 하는 날' },
    { id: 2, title: '여행 준비하기', content: '준비 리스트 체크하기, 맛집 찾기' },
    { id:3, title: '오늘의 일정', content: '동사무소 들리고 장보기!'},
  ]);

  function addPost(post) {
    post.id = Date.now();
    posts.value.push(post);
  }

  function updatePost(id, updatedPost) {
    const index = posts.value.findIndex(p => p.id === id);
    if (index !== -1) posts.value[index] = { ...posts.value[index], ...updatedPost };
  }

  function deletePost(id) {
    posts.value = posts.value.filter(p => p.id !== id);
  }

  function getPostById(id) {
    return posts.value.find(p => p.id === id);
  }

  return { posts, addPost, updatePost, deletePost, getPostById };
});
