<template>
  <div>About View 😎</div>
  <button class="btn btn-primary" @click="$router.push('/')">
    Home으로 이동
  </button>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route); // route.path: /about
</script>

<style></style>
