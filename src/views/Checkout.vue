<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useOrderStore } from '../store/order'
import type { CustomerInfo, PaymentMethod } from '../types'

const router = useRouter()
const { state, confirmOrder } = useOrderStore()

const paymentMethods: PaymentMethod[] = ['Cash on Delivery', 'ABA Pay', 'Wing', 'Credit Card']

const form = reactive<CustomerInfo>({
  name: '',
  phone: '',
  address: '',
  paymentMethod: 'Cash on Delivery'
})

const errors = ref<Partial<Record<keyof CustomerInfo, string>>>({})

function validate(): boolean {
  const next: typeof errors.value = {}
  if (!form.name.trim()) next.name = 'Please enter your name.'
  if (!/^[0-9+ ]{6,}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
  if (!form.address.trim()) next.address = 'Please enter a delivery address.'
  errors.value = next
  return Object.keys(next).length === 0
}

function submit() {
  if (!validate()) return
  const order = confirmOrder({ ...form })
  if (order) router.push('/order-success')
}
</script>

<template>
  <div class="container page">
    <div v-if="!state.draft" class="empty">
      <h1>No order in progress</h1>
      <p>Pick a dish from the menu to get started.</p>
      <router-link to="/foods" class="btn btn-primary">Browse Menu</router-link>
    </div>

    <div v-else class="checkout">
      <div class="checkout__form">
        <h1>Checkout</h1>
        <p class="page__sub">Tell us where to send your order.</p>

        <div class="field">
          <label for="name">Customer Name</label>
          <input id="name" v-model="form.name" type="text" placeholder="Sok Dara" />
          <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
        </div>

        <div class="field">
          <label for="phone">Phone Number</label>
          <input id="phone" v-model="form.phone" type="tel" placeholder="012 345 678" />
          <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
        </div>

        <div class="field">
          <label for="address">Delivery Address</label>
          <textarea id="address" v-model="form.address" rows="3" placeholder="House number, street, sangkat, khan"></textarea>
          <span v-if="errors.address" class="error-text">{{ errors.address }}</span>
        </div>

        <div class="field">
          <label>Payment Method</label>
          <div class="payment-options">
            <label v-for="method in paymentMethods" :key="method" class="payment-option">
              <input type="radio" name="payment" :value="method" v-model="form.paymentMethod" />
              {{ method }}
            </label>
          </div>
        </div>

        <button class="btn btn-primary checkout__submit" @click="submit">Confirm Order</button>
      </div>

      <aside class="summary">
        <h3>Order Summary</h3>
        <div class="summary__item">
          <img :src="state.draft.food.image" :alt="state.draft.food.name" />
          <div>
            <p class="summary__name">{{ state.draft.food.name }} × {{ state.draft.quantity }}</p>
            <p class="summary__meta">Spicy: {{ state.draft.spicyLevel }}</p>
            <p v-if="state.draft.extras.length" class="summary__meta">
              Extras: {{ state.draft.extras.map(e => e.name).join(', ') }}
            </p>
          </div>
        </div>
        <hr class="divider" />
        <div class="summary__total">
          <span>Total</span>
          <span>${{ state.draft.totalPrice.toFixed(2) }}</span>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 48px 0 80px; }
.page__sub { margin-bottom: 24px; }
.empty { text-align: center; padding: 64px 0; }
.empty .btn { margin-top: 16px; }

.checkout {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: start;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
}
.payment-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1.5px solid var(--line);
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  cursor: pointer;
}

.checkout__submit { width: 100%; margin-top: 8px; padding: 14px; }

.summary {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 24px;
}
.summary h3 { margin-bottom: 16px; }
.summary__item { display: flex; gap: 12px; }
.summary__item img {
  width: 76px;
  height: 76px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.summary__name { font-weight: 600; margin: 0 0 4px; }
.summary__meta { font-size: 0.82rem; color: var(--ink-soft); margin: 0 0 2px; }
.summary__total {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--brick);
  font-weight: 600;
}

@media (max-width: 760px) {
  .checkout { grid-template-columns: 1fr; }
}
</style>
