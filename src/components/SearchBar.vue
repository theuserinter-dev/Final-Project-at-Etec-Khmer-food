<script setup lang="ts">
const model = defineModel<string>({ default: '' })
</script>

<template>
  <div class="search">
    <input
      v-model="model"
      type="text"
      placeholder="Search for a Khmer dish…"
      aria-label="Search food"
    />
  </div>
</template>

<style scoped>
.search input {
  width: 100%;
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 13px 16px;
  border: 1.5px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--ink);
}
.search input:focus {
  outline: 2px solid var(--turmeric);
  outline-offset: 1px;
  border-color: var(--turmeric);
}
</style>
