<script setup lang="ts">
import { extraIngredients } from '../data/ingredients'
</script>

<template>
  <div class="container page">
    <h1>Ingredients</h1>
    <p class="page__sub">Common add-ons available across the menu.</p>
    <ul class="list">
      <li v-for="ing in extraIngredients" :key="ing.id" class="list__item">
        <span>{{ ing.name }}</span>
        <span>+${{ ing.price.toFixed(2) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page { padding: 64px 0 96px; max-width: 520px; }
.page__sub { margin-bottom: 24px; }
.list { list-style: none; padding: 0; margin: 0; }
.list__item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}
</style>
