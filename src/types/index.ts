export type FoodCategory =
  | 'Main Dish'
  | 'Soup'
  | 'Noodles'
  | 'Salad'
  | 'Grilled'
  | 'Snack'
  | 'Dessert'
  | 'Drink'

export interface Food {
  id: string
  name: string
  khmerName: string
  category: FoodCategory
  price: number // USD
  description: string
  image: string
  defaultSpicy: SpicyLevel
  popular?: boolean
}

export type SpicyLevel = 'None' | 'Mild' | 'Medium' | 'Hot' | 'Khmer Hot'

export interface ExtraIngredient {
  id: string
  name: string
  price: number
}

export type PaymentMethod = 'Cash on Delivery' | 'ABA Pay' | 'Wing' | 'Credit Card'

export interface OrderDraft {
  food: Food
  spicyLevel: SpicyLevel
  extras: ExtraIngredient[]
  quantity: number
  totalPrice: number
}

export interface CustomerInfo {
  name: string
  phone: string
  address: string
  paymentMethod: PaymentMethod
}

export interface ConfirmedOrder extends OrderDraft {
  orderNumber: string
  customer: CustomerInfo
  placedAt: string
}
