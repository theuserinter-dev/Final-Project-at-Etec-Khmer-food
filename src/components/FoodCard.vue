<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Food } from '../types'

const props = defineProps<{ food: Food }>()
const router = useRouter()

function viewDetail() {
  router.push(`/foods/${props.food.id}`)
}
</script>

<template>
  <article class="card">
    <div class="card__image">
      <img :src="food.image" :alt="food.name" loading="lazy" />
      <span v-if="food.popular" class="card__badge">Popular</span>
    </div>
    <div class="card__body">
      <div class="card__title-row">
        <h3 class="card__title">{{ food.name }}</h3>
        <span class="card__khmer">{{ food.khmerName }}</span>
      </div>
      <p class="card__desc">{{ food.description }}</p>
      <div class="card__footer">
        <span class="card__price">${{ food.price.toFixed(2) }}</span>
        <button class="btn btn-outline card__btn" @click="viewDetail">Detail</button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.card__image {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--brick);
  color: var(--rice);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 999px;
}
.card__body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.card__title-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.card__title {
  font-size: 1.05rem;
  margin: 0;
}
.card__khmer {
  font-size: 0.8rem;
  color: var(--ink-soft);
  white-space: nowrap;
}
.card__desc {
  font-size: 0.85rem;
  margin: 8px 0 16px;
  flex: 1;
}
.card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__price {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--brick);
}
.card__btn {
  padding: 8px 18px;
  font-size: 0.85rem;
}
</style>
