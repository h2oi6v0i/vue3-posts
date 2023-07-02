<template>
  <div>Home View 🏡</div>
  <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  <hr class="my-4" />
  <AppGrid :items="items" v-slot="{ item }">
    <AppCard>
      {{ item }}
    </AppCard>
  </AppGrid>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const router = useRouter();
const goAboutPage = () => {
  router.push({
    name: 'About',
  });
};

const items = ref(['A', 'B', 'C', 'D']);
</script>

<style></style>
