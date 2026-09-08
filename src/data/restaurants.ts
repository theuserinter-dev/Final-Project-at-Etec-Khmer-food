export interface Restaurant {
  id: string
  name: string
  area: string
  rating: number
  description: string
  image: string
}

const img = (label: string) =>
  `https://placehold.co/600x400/8C3313/FFFCF6?font=roboto&text=${encodeURIComponent(label)}`

export const restaurants: Restaurant[] = [
  { id: 'malis', name: 'Malis Restaurant', area: 'Phnom Penh', rating: 4.7, description: 'Upscale Khmer dining in a garden setting, known for its refined take on classic dishes.', image: img('Malis') },
  { id: 'kravanh', name: 'Kravanh Bistro', area: 'Siem Reap', rating: 4.5, description: 'Cozy bistro near the temples serving home-style Khmer comfort food.', image: img('Kravanh Bistro') },
  { id: 'sugar-palm', name: 'Sugar Palm', area: 'Siem Reap', rating: 4.6, description: 'Traditional wooden house restaurant famous for its Fish Amok.', image: img('Sugar Palm') },
  { id: 'mekong-river', name: 'Mekong Riverside', area: 'Phnom Penh', rating: 4.3, description: 'Riverside spot for grilled seafood and sunset views.', image: img('Mekong Riverside') }
]
