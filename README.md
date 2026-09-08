# Khmer Food

A frontend-only Khmer food ordering site built with Vue 3, TypeScript, Vite and Vue Router.

## What's included

- **Login gate**: the whole site requires logging in first (`src/views/Login.vue`). This is a
  frontend-only demo, so any name + a password of 4+ characters logs you in — there's no real
  backend or password check. The session is remembered in `localStorage`, and `Log Out` clears it.
- 36 Khmer dishes across Main Dish, Soup, Noodles, Salad, Grilled, Snack, Dessert and Drink
- Menu page with search and category filtering
- Food detail page: choose a spicy level, add extra ingredients, set quantity, see the live total, and click **Buy Now**
- Checkout page: customer name, phone, address, payment method, with basic validation
- Order success page with a receipt-style summary
- Restaurants list + detail pages
- Stub pages for Favorites, Recipes and Ingredients (ready to extend)

## Run it locally

```bash
npm install
npm run dev
```

Then open the local address Vite prints (usually `http://localhost:5173`).

## Project structure

```
src/
  components/   Navbar, Footer, FoodCard, SearchBar, CategoryFilter, RestaurantCard, Rating
  views/        Home, Foods, FoodDetail, Checkout, OrderSuccess, Restaurants, RestaurantDetail,
                Favorites, Recipes, Ingredients, About
  data/         foods.ts, ingredients.ts, restaurants.ts
  store/        order.ts — shared order-draft state; auth.ts — demo login state (localStorage)
  types/        shared TypeScript types
  router/       route definitions
```

## Notes

- Food photos are colored placeholders (`placehold.co`) so the site works without any images
  to source — swap the `image` field in `src/data/foods.ts` for real photos whenever you're ready.
- The ordering flow is in-memory (no backend): "Buy Now" stores the draft order, Checkout confirms
  it, and Order Success reads the confirmed order. Refreshing the success page after closing the
  tab will lose the order — that's expected for a frontend-only demo.
- Colors and fonts are defined once in `src/style.css` (`:root` variables) so the whole theme can
  be restyled from one place.
