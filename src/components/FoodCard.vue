<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Food } from "../types";

const props = defineProps<{ food: Food }>();
const router = useRouter();

function viewDetail() {
  router.push(`/foods/${props.food.id}`);
}
</script>

<template>
  <article class="card">
    <div class="card__top">
      <span v-if="food.popular" class="card__tag">Popular</span>
      <span v-else class="card__tag card__tag--muted">{{ food.category }}</span>
      <button class="card__fav" aria-label="Favorite">♡</button>
    </div>

    <div class="card__image">
      <img :src="food.image" :alt="food.name" loading="lazy" />
    </div>

    <div class="card__body">
      <div class="card__title-row">
        <h3 class="card__title">{{ food.name }}</h3>
        <span class="card__khmer">{{ food.khmerName }}</span>
      </div>
      <p class="card__desc">{{ food.description }}</p>
      <div class="card__footer">
        <span class="card__price">${{ food.price.toFixed(2) }}</span>
        <button class="card__detail" @click="viewDetail">Detail →</button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  background: var(--forest);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}

.card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
}
.card__tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--forest);
  background: var(--gold);
  padding: 3px 10px;
  border-radius: 999px;
}
.card__tag--muted {
  color: var(--gold);
  background: rgba(224, 169, 58, 0.15);
}
.card__fav {
  font-size: 1.15rem;
  color: rgba(246, 239, 225, 0.7);
  line-height: 1;
}
.card__fav:hover {
  color: var(--gold);
}

.card__image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
.card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.card:hover .card__image img {
  transform: scale(1.05);
}

.card__body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: var(--surface);
}
.card__title-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.card__title {
  font-size: 1.02rem;
  margin: 0;
  color: var(--ink);
}
.card__khmer {
  font-size: 0.78rem;
  color: var(--ink-soft);
  white-space: nowrap;
}
.card__desc {
  font-size: 0.85rem;
  color: var(--ink-soft);
  margin: 8px 0 16px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
.card__detail {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--forest);
}
.card__detail:hover {
  color: var(--gold-dark);
}
</style>
