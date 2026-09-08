<script setup lang="ts">
defineProps<{ categories: string[] }>()
const active = defineModel<string>({ default: 'All' })
</script>

<template>
  <div class="filter">
    <button
      class="filter__tab"
      :class="{ 'filter__tab--active': active === 'All' }"
      @click="active = 'All'"
    >
      All
    </button>
    <button
      v-for="cat in categories"
      :key="cat"
      class="filter__tab"
      :class="{ 'filter__tab--active': active === cat }"
      @click="active = cat"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.filter__tab {
  padding: 8px 16px;
  border: 1.5px solid var(--line);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--surface);
}
.filter__tab--active {
  background: var(--brick);
  border-color: var(--brick);
  color: var(--rice);
}
</style>
