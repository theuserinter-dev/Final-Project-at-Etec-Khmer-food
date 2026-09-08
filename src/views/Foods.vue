<script setup lang="ts">
import { computed, ref } from 'vue'
import { foods, categories } from '../data/foods'
import FoodCard from '../components/FoodCard.vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'

const query = ref('')
const activeCategory = ref('All')

const filtered = computed(() => {
  return foods.filter(f => {
    const matchesCategory = activeCategory.value === 'All' || f.category === activeCategory.value
    const matchesQuery =
      query.value.trim() === '' ||
      f.name.toLowerCase().includes(query.value.toLowerCase()) ||
      f.khmerName.includes(query.value)
    return matchesCategory && matchesQuery
  })
})
</script>

<template>
  <div class="container page">
    <h1>Full Menu</h1>
    <p class="page__sub">{{ foods.length }} Khmer dishes — filter by category or search by name.</p>

    <div class="controls">
      <SearchBar v-model="query" />
      <CategoryFilter :categories="categories" v-model="activeCategory" />
    </div>

    <p v-if="filtered.length === 0" class="empty">
      No dishes match "{{ query }}". Try another search or category.
    </p>
    <div v-else class="grid">
      <FoodCard v-for="food in filtered" :key="food.id" :food="food" />
    </div>
  </div>
</template>

<style scoped>
.page { padding: 48px 0 80px; }
.page__sub { margin-bottom: 32px; }
.controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.empty {
  padding: 40px 0;
  text-align: center;
  color: var(--ink-soft);
}
</style>
