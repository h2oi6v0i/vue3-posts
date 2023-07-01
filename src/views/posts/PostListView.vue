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
    <!-- 게시판 상세 미리보기 -->
    <hr class="my-4" />
    <!-- default slot으로 들어감 -->
    <AppCard>
      <PostDetailView :id="4"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';

const router = useRouter();
const posts = ref([]);

/** 게시글 목록 조회 */
const fetchPosts = () => {
  console.log(getPosts());
  posts.value = getPosts();
};

fetchPosts();

/** 게시글 상세 페이지로 이동 */
const goPage = id => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};
</script>

<style></style>
