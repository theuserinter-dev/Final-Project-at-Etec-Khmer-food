<script setup lang="ts">
import { restaurants } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard.vue'
</script>

<template>
  <div class="container page">
    <h1>Restaurants</h1>
    <p class="page__sub">Places around Cambodia worth visiting for the real thing.</p>
    <div class="grid">
      <RestaurantCard v-for="r in restaurants" :key="r.id" :restaurant="r" />
    </div>
  </div>
</template>

<style scoped>
.page { padding: 48px 0 80px; }
.page__sub { margin-bottom: 32px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
</style>
