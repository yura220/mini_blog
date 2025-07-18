<template>
  <div class="neu-card">
    <h2>{{ isEdit ? "글 수정하기" : "새 글 작성하기" }}</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="title" class="neu-input" placeholder="제목" required />
      <textarea
        v-model="content"
        class="neu-textarea"
        placeholder="내용"
        required
      ></textarea>
      <button type="submit" class="sub-button">
        {{ isEdit ? "수정" : "작성" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePostStore } from "../store/posts";
import "./css/PostForm.css";

const router = useRouter();
const route = useRoute();
const store = usePostStore();

const title = ref("");
const content = ref("");
const isEdit = route.path.includes("edit");

onMounted(() => {
  if (isEdit) {
    const post = store.getPostById(Number(route.params.id));
    if (post) {
      title.value = post.title;
      content.value = post.content;
    }
  }
});

function handleSubmit() {
  if (isEdit) {
    store.updatePost(Number(route.params.id), {
      title: title.value,
      content: content.value,
    });
  } else {
    store.addPost({ title: title.value, content: content.value });
  }
  router.push("/");
}
</script>
