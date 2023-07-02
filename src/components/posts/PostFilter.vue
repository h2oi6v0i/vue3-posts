<template>
  <form @submit.prevent>
    <div class="row g-3">
      <!-- Search / Filter -->
      <div class="col">
        <input
          :value="title"
          @input="$emit('update:title', event.target.value)"
          type="text"
          class="form-control"
          placeholder="제목으로 검색해 주세요."
        />
      </div>
      <!-- Change page limit -->
      <div class="col-3">
        <select
          :value="limit"
          @input="$emit('update:limit', event.target.value)"
          class="form-select"
        >
          <option value="3">3개씩 보기</option>
          <option value="6">6개씩 보기</option>
          <option value="9">9개씩 보기</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    limit: Number,
  },
});

/** 다중 v-model */
defineEmits(['update:title', 'update:limit']);
</script>

<style></style>
