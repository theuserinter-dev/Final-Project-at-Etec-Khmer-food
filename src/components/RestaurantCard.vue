<script setup lang="ts">
import type { Restaurant } from '../data/restaurants'
import Rating from './Rating.vue'

defineProps<{ restaurant: Restaurant }>()
</script>

<template>
  <router-link :to="`/restaurants/${restaurant.id}`" class="rcard">
    <img :src="restaurant.image" :alt="restaurant.name" class="rcard__image" loading="lazy" />
    <div class="rcard__body">
      <h3 class="rcard__title">{{ restaurant.name }}</h3>
      <p class="rcard__area">{{ restaurant.area }}</p>
      <Rating :value="restaurant.rating" />
      <p class="rcard__desc">{{ restaurant.description }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.rcard {
  display: block;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.rcard__image {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}
.rcard__body { padding: 16px; }
.rcard__title { margin: 0 0 2px; font-size: 1.05rem; }
.rcard__area { color: var(--ink-soft); font-size: 0.85rem; margin: 0 0 8px; }
.rcard__desc { font-size: 0.85rem; margin: 8px 0 0; }
</style>
