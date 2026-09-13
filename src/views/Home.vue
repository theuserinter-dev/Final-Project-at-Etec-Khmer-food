<script setup lang="ts">
import { computed } from "vue";
import { foods } from "../data/foods";
import FoodCard from "../components/FoodCard.vue";

const popular = computed(() => foods.filter((f) => f.popular));
const heroFood = computed(() => popular.value[0] ?? foods[0]);
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__text">
          <p class="hero__eyebrow">សូមស្វាគមន៍ — Welcome</p>
          <h1 class="hero__title">
            Real Khmer cooking,<br />from
            <span class="hero__accent">kroeung</span> to table.
          </h1>
          <p class="hero__sub">
            Explore {{ foods.length }}+ dishes from across Cambodia — pick your
            spice level, add what you like, and order it your way.
          </p>
          <router-link to="/foods" class="btn btn-primary hero__cta"
            >Explore Food</router-link
          >
          <div class="hero__stats">
            <div>
              <strong>{{ foods.length }}+</strong><span>Dishes</span>
            </div>
            <div><strong>8</strong><span>Categories</span></div>
            <div><strong>4</strong><span>Restaurants</span></div>
          </div>
        </div>

        <div class="hero__media">
          <img :src="heroFood.image" :alt="heroFood.name" class="hero__photo" />
          <div class="hero__badge">
            🌶️ {{ foods.length }}+ Authentic Recipes
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <div class="section__head">
        <div>
          <h2>Popular Khmer Food</h2>
          <p class="section__sub">Traditional food, unforgettable taste.</p>
        </div>
        <router-link to="/foods" class="btn-ghost">See full menu →</router-link>
      </div>
      <div class="grid">
        <FoodCard v-for="food in popular" :key="food.id" :food="food" />
      </div>
    </section>

    <section class="cta">
      <div class="container cta__inner">
        <h2>Hungry already?</h2>
        <p>
          See the full menu of {{ foods.length }}+ dishes and find your next
          favorite.
        </p>
        <router-link to="/foods" class="btn btn-primary"
          >Browse Full Menu</router-link
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: var(--forest);
  color: var(--rice);
}
.hero__inner {
  padding: 72px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.hero__eyebrow {
  font-size: 0.95rem;
  color: var(--gold);
  font-weight: 600;
  margin: 0 0 12px;
}
.hero__title {
  font-size: clamp(2.1rem, 4vw, 3rem);
  color: var(--rice);
  margin-bottom: 20px;
}
.hero__accent {
  color: var(--gold);
}
.hero__sub {
  font-size: 1.05rem;
  color: rgba(246, 239, 225, 0.8);
  max-width: 460px;
}
.hero__cta {
  margin-top: 8px;
}
.hero__stats {
  display: flex;
  gap: 32px;
  margin-top: 36px;
}
.hero__stats strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--gold);
}
.hero__stats span {
  font-size: 0.78rem;
  color: rgba(246, 239, 225, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.hero__media {
  position: relative;
}
.hero__photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 20px;
  border: 4px solid var(--forest-soft);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}
.hero__badge {
  position: absolute;
  bottom: -18px;
  left: -18px;
  background: var(--gold);
  color: var(--forest);
  font-weight: 700;
  font-size: 0.85rem;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}

.section {
  padding: 48px 0 64px;
}
.section__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
}
.section__sub {
  margin: 4px 0 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.cta {
  background: var(--turmeric-soft);
  text-align: center;
}
.cta__inner {
  padding: 56px 24px;
  max-width: 480px;
  margin: 0 auto;
}
.cta h2 {
  margin-bottom: 8px;
}
.cta p {
  margin-bottom: 20px;
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .hero__media {
    order: -1;
  }
}

@media (max-width: 640px) {
  .hero__inner {
    padding: 40px 0 48px;
    text-align: center;
  }
  .hero__text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero__sub {
    max-width: 100%;
  }
  .hero__stats {
    justify-content: center;
    gap: 24px;
  }
  .hero__badge {
    left: 50%;
    transform: translateX(-50%);
    bottom: -14px;
    font-size: 0.75rem;
    padding: 9px 14px;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
