<script setup lang="ts">
import { useOrderStore } from '../store/order'

const { state } = useOrderStore()
</script>

<template>
  <div class="container page">
    <div v-if="!state.confirmed" class="empty">
      <h1>No recent order</h1>
      <router-link to="/foods" class="btn btn-primary">Browse Menu</router-link>
    </div>

    <div v-else class="success">
      <div class="success__icon">✓</div>
      <h1>Order placed!</h1>
      <p class="success__sub">
        Thanks, {{ state.confirmed.customer.name }} — your order
        <strong>{{ state.confirmed.orderNumber }}</strong> is on its way.
      </p>

      <div class="receipt">
        <div class="receipt__row">
          <span>{{ state.confirmed.food.name }} × {{ state.confirmed.quantity }}</span>
          <span>${{ state.confirmed.totalPrice.toFixed(2) }}</span>
        </div>
        <p class="receipt__meta">Spicy level: {{ state.confirmed.spicyLevel }}</p>
        <p v-if="state.confirmed.extras.length" class="receipt__meta">
          Extras: {{ state.confirmed.extras.map(e => e.name).join(', ') }}
        </p>
        <hr class="divider" />
        <p class="receipt__meta">Deliver to: {{ state.confirmed.customer.address }}</p>
        <p class="receipt__meta">Phone: {{ state.confirmed.customer.phone }}</p>
        <p class="receipt__meta">Payment: {{ state.confirmed.customer.paymentMethod }}</p>
      </div>

      <router-link to="/foods" class="btn btn-primary">Order Something Else</router-link>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 64px 0 96px; }
.empty { text-align: center; }
.success {
  max-width: 460px;
  margin: 0 auto;
  text-align: center;
}
.success__icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--leaf);
  color: var(--rice);
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.success__sub { margin-bottom: 28px; }
.receipt {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  text-align: left;
  margin-bottom: 28px;
}
.receipt__row {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 8px;
}
.receipt__meta { font-size: 0.85rem; color: var(--ink-soft); margin: 0 0 4px; }
</style>
