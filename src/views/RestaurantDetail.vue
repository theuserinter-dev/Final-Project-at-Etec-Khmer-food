<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { restaurants } from '../data/restaurants'
import Rating from '../components/Rating.vue'

const route = useRoute()
const restaurant = computed(() => restaurants.find(r => r.id === route.params.id))
</script>

<template>
  <div v-if="restaurant" class="container page">
    <router-link to="/restaurants" class="back">← Back to restaurants</router-link>
    <div class="detail">
      <img :src="restaurant.image" :alt="restaurant.name" class="detail__image" />
      <div>
        <h1>{{ restaurant.name }}</h1>
        <p class="detail__area">{{ restaurant.area }}</p>
        <Rating :value="restaurant.rating" />
        <p class="detail__desc">{{ restaurant.description }}</p>
      </div>
    </div>
  </div>
  <div v-else class="container page">
    <p>Restaurant not found.</p>
    <router-link to="/restaurants" class="btn btn-outline">Back to restaurants</router-link>
  </div>
</template>

<style scoped>
.page { padding: 40px 0 80px; }
.back { display: inline-block; margin-bottom: 24px; font-size: 0.9rem; color: var(--ink-soft); font-weight: 600; }
.detail { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.detail__image { width: 100%; border-radius: var(--radius-md); aspect-ratio: 4/3; object-fit: cover; }
.detail__area { color: var(--ink-soft); margin-bottom: 8px; }
.detail__desc { margin-top: 16px; }
@media (max-width: 760px) { .detail { grid-template-columns: 1fr; } }
</style>
