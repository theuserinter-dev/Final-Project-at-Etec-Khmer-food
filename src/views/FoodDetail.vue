<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { foods } from '../data/foods'
import { extraIngredients } from '../data/ingredients'
import { useOrderStore } from '../store/order'
import type { SpicyLevel } from '../types'

const route = useRoute()
const router = useRouter()
const { setDraft } = useOrderStore()

const food = computed(() => foods.find(f => f.id === route.params.id))

const spicyLevels: SpicyLevel[] = ['None', 'Mild', 'Medium', 'Hot', 'Khmer Hot']
const selectedSpicy = ref<SpicyLevel>('None')
const selectedExtraIds = ref<Set<string>>(new Set())
const quantity = ref(1)

// Reset customization whenever the visited dish changes
watch(
  food,
  newFood => {
    if (newFood) {
      selectedSpicy.value = newFood.defaultSpicy
      selectedExtraIds.value = new Set()
      quantity.value = 1
    }
  },
  { immediate: true }
)

function toggleExtra(id: string) {
  const next = new Set(selectedExtraIds.value)
  next.has(id) ? next.delete(id) : next.add(id)
  selectedExtraIds.value = next
}

const selectedExtras = computed(() =>
  extraIngredients.filter(e => selectedExtraIds.value.has(e.id))
)

const extrasTotal = computed(() =>
  selectedExtras.value.reduce((sum, e) => sum + e.price, 0)
)

const totalPrice = computed(() => {
  if (!food.value) return 0
  return (food.value.price + extrasTotal.value) * quantity.value
})

function changeQuantity(delta: number) {
  quantity.value = Math.min(10, Math.max(1, quantity.value + delta))
}

function buyNow() {
  if (!food.value) return
  setDraft({
    food: food.value,
    spicyLevel: selectedSpicy.value,
    extras: selectedExtras.value,
    quantity: quantity.value,
    totalPrice: totalPrice.value
  })
  router.push('/checkout')
}
</script>

<template>
  <div v-if="food" class="container page">
    <router-link to="/foods" class="back">← Back to menu</router-link>

    <div class="detail">
      <div class="detail__image">
        <img :src="food.image" :alt="food.name" />
      </div>

      <div class="detail__info">
        <span class="tag">{{ food.category }}</span>
        <h1 class="detail__title">{{ food.name }}</h1>
        <p class="detail__khmer">{{ food.khmerName }}</p>
        <p class="detail__desc">{{ food.description }}</p>
        <p class="detail__base-price">${{ food.price.toFixed(2) }} <span>base price</span></p>

        <hr class="divider" />

        <div class="option-group">
          <h3>Spicy Level</h3>
          <div class="pill-row">
            <button
              v-for="level in spicyLevels"
              :key="level"
              class="pill"
              :class="{ 'pill--active': selectedSpicy === level }"
              @click="selectedSpicy = level"
            >
              {{ level }}
            </button>
          </div>
        </div>

        <div class="option-group">
          <h3>Add Extra Ingredients</h3>
          <div class="extras">
            <label v-for="extra in extraIngredients" :key="extra.id" class="extra-row">
              <span class="extra-row__left">
                <input
                  type="checkbox"
                  :checked="selectedExtraIds.has(extra.id)"
                  @change="toggleExtra(extra.id)"
                />
                {{ extra.name }}
              </span>
              <span class="extra-row__price">+${{ extra.price.toFixed(2) }}</span>
            </label>
          </div>
        </div>

        <div class="option-group">
          <h3>Quantity</h3>
          <div class="qty">
            <button class="qty__btn" @click="changeQuantity(-1)" :disabled="quantity <= 1">−</button>
            <span class="qty__value">{{ quantity }}</span>
            <button class="qty__btn" @click="changeQuantity(1)" :disabled="quantity >= 10">+</button>
          </div>
        </div>

        <hr class="divider" />

        <div class="buy-bar">
          <div>
            <p class="buy-bar__label">Total</p>
            <p class="buy-bar__total">${{ totalPrice.toFixed(2) }}</p>
          </div>
          <button class="btn btn-primary buy-bar__btn" @click="buyNow">Buy Now</button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container page">
    <p>Dish not found.</p>
    <router-link to="/foods" class="btn btn-outline">Back to menu</router-link>
  </div>
</template>

<style scoped>
.page { padding: 40px 0 80px; }
.back {
  display: inline-block;
  margin-bottom: 24px;
  font-size: 0.9rem;
  color: var(--ink-soft);
  font-weight: 600;
}

.detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
.detail__image img {
  width: 100%;
  border-radius: var(--radius-md);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
.detail__title { margin-bottom: 4px; }
.detail__khmer { color: var(--ink-soft); margin-bottom: 16px; }
.detail__base-price {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--brick);
  margin: 0;
}
.detail__base-price span {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--ink-soft);
  font-weight: 400;
}

.option-group { margin-bottom: 24px; }
.option-group h3 { font-size: 1rem; margin-bottom: 12px; }

.pill-row { display: flex; flex-wrap: wrap; gap: 8px; }
.pill {
  padding: 8px 16px;
  border: 1.5px solid var(--line);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink-soft);
  background: var(--surface);
}
.pill--active {
  background: var(--turmeric);
  border-color: var(--turmeric);
  color: var(--ink);
}

.extras { display: flex; flex-direction: column; gap: 4px; }
.extra-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 4px;
  border-bottom: 1px solid var(--line);
  font-size: 0.92rem;
  cursor: pointer;
}
.extra-row__left { display: flex; align-items: center; gap: 10px; }
.extra-row__price { color: var(--ink-soft); font-weight: 600; }

.qty { display: flex; align-items: center; gap: 16px; }
.qty__btn {
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--line);
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  font-weight: 700;
}
.qty__btn:disabled { opacity: 0.4; cursor: not-allowed; }
.qty__value { font-weight: 700; min-width: 20px; text-align: center; }

.buy-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buy-bar__label { font-size: 0.85rem; color: var(--ink-soft); margin: 0; }
.buy-bar__total {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--brick);
  margin: 0;
}
.buy-bar__btn { padding: 14px 36px; font-size: 1rem; }

@media (max-width: 760px) {
  .detail { grid-template-columns: 1fr; gap: 24px; }
}
</style>
