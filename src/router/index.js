import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import PostList from "../components/PostList.vue";
import PostForm from "../components/PostForm.vue";
import PostDetail from "../components/PostDetail.vue";
import "../components/css/common.css";

const routes = [
  { path: "/", component: PostList },
  { path: "/new", component: PostForm },
  { path: "/post/:id", component: PostDetail, props: true },
  { path: "/edit/:id", component: PostForm, props: true },
];

const router = createRouter({
  history: createWebHashHistory(), // createWebHistory(),
  routes,
});

export default router;
