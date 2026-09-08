import { reactive } from 'vue'
import type { ConfirmedOrder, CustomerInfo, OrderDraft } from '../types'

interface OrderState {
  draft: OrderDraft | null
  confirmed: ConfirmedOrder | null
}

const state = reactive<OrderState>({
  draft: null,
  confirmed: null
})

function setDraft(draft: OrderDraft) {
  state.draft = draft
}

function clearDraft() {
  state.draft = null
}

function confirmOrder(customer: CustomerInfo): ConfirmedOrder | null {
  if (!state.draft) return null
  const order: ConfirmedOrder = {
    ...state.draft,
    customer,
    orderNumber: generateOrderNumber(),
    placedAt: new Date().toISOString()
  }
  state.confirmed = order
  state.draft = null
  return order
}

function generateOrderNumber(): string {
  const stamp = Date.now().toString().slice(-6)
  return `KF-${stamp}`
}

export function useOrderStore() {
  return { state, setDraft, clearDraft, confirmOrder }
}
