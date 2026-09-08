<script setup lang="ts">
const props = defineProps<{ value: number; max?: number }>()
const max = props.max ?? 5
</script>

<template>
  <div class="rating" :aria-label="`Rated ${value} out of ${max}`">
    <span v-for="n in max" :key="n" class="rating__star" :class="{ 'rating__star--filled': n <= Math.round(value) }">★</span>
    <span class="rating__value">{{ value.toFixed(1) }}</span>
  </div>
</template>

<style scoped>
.rating {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
.rating__star {
  color: var(--line);
  font-size: 0.9rem;
}
.rating__star--filled {
  color: var(--turmeric);
}
.rating__value {
  margin-left: 6px;
  font-size: 0.8rem;
  color: var(--ink-soft);
  font-weight: 600;
}
</style>
