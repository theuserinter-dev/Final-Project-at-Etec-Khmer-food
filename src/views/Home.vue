<script setup lang="ts">
import { computed } from 'vue'
import { foods } from '../data/foods'
import FoodCard from '../components/FoodCard.vue'

const popular = computed(() => foods.filter(f => f.popular))
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero__inner">
        <p class="hero__eyebrow">សូមស្វាគមន៍ — Welcome</p>
        <h1 class="hero__title">Real Khmer cooking,<br />from kroeung to table.</h1>
        <p class="hero__sub">
          Explore {{ foods.length }}+ dishes from across Cambodia — pick your spice level,
          add what you like, and order it your way.
        </p>
        <router-link to="/foods" class="btn btn-primary hero__cta">Explore Food</router-link>
      </div>
    </section>

    <section class="container section">
      <div class="section__head">
        <h2>Popular Khmer Food</h2>
        <router-link to="/foods" class="btn-ghost">See full menu →</router-link>
      </div>
      <div class="grid">
        <FoodCard v-for="food in popular" :key="food.id" :food="food" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(180deg, var(--turmeric-soft) 0%, var(--rice) 100%);
  border-bottom: 1px solid var(--line);
}
.hero__inner {
  padding: 88px 0 72px;
  max-width: 680px;
}
.hero__eyebrow {
  font-size: 0.95rem;
  color: var(--brick);
  font-weight: 600;
  margin: 0 0 12px;
}
.hero__title {
  font-size: clamp(2.1rem, 5vw, 3.2rem);
  margin-bottom: 20px;
}
.hero__sub {
  font-size: 1.05rem;
  max-width: 480px;
}
.hero__cta { margin-top: 8px; }

.section { padding: 64px 0; }
.section__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 24px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
