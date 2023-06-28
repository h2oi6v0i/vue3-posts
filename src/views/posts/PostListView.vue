<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const posts = ref([]);

/** 게시글 목록 조회 */
const fetchPosts = () => {
  posts.value = getPosts();
};

fetchPosts();

/** 게시글 상세 페이지로 이동 */
const goPage = id => {
  // 방법 1
  // router.push(`/posts/${id}`);

  // 방법 2
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
    // query: {
    //   searchText: 'Hello',
    // },
    // hash: '#world',
    // query와 hash까지 넣으면 http://127.0.0.1:5173/posts/1?searchText=Hello#world 이런 URL 생성됨
  });
};
</script>

<style></style>
