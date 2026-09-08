<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const route = useRoute();
const router = useRouter();
const { state, logout } = useAuthStore();
const open = ref(false);

const isAdmin = computed(() => state.user?.role === "admin");

const initials = computed(() => {
  if (!state.user) return "";
  return state.user.name
    .trim()
    .split(/\s+/)
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
});

const links = [
  { to: "/", label: "Home" },
  { to: "/foods", label: "Menu" },
  { to: "/restaurants", label: "Restaurants" },
  { to: "/recipes", label: "Recipes" },
  { to: "/about", label: "About" },
];

function handleLogout() {
  logout();
  router.push("/login");
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar__inner">
      <router-link to="/" class="brand">
        <span class="brand__badge">ខ្មែរ</span>
        <span class="brand__text">
          <span class="brand__word">Khmer Food</span>
          <span class="brand__tag">Taste of Cambodia</span>
        </span>
      </router-link>

      <nav class="links" :class="{ 'links--open': open }">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="links__item"
          :class="{ 'links__item--active': route.path === link.to }"
          @click="open = false"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="account">
        <template v-if="state.user">
          <router-link v-if="state.user" to="/admin" class="admin-chip"
            >Admin</router-link
          >
          <span class="account__avatar">{{ initials }}</span>
          <span class="account__name">{{ state.user.name }}</span>
          <button class="account__logout" @click="handleLogout">Log Out</button>
        </template>
      </div>

      <button class="menu-btn" @click="open = !open" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar__pattern"></div>
  </header>
</template>

<style scoped>
.navbar {
  background: var(--surface);
  position: sticky;
  top: 0;
  z-index: 20;
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 76px;
}
.navbar__pattern {
  height: 5px;
  background: repeating-linear-gradient(
    45deg,
    var(--brick) 0px,
    var(--brick) 10px,
    var(--turmeric) 10px,
    var(--turmeric) 20px
  );
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand__badge {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brick), var(--brick-dark));
  color: var(--rice);
  font-family: var(--font-display);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 8px rgba(181, 69, 27, 0.35);
}
.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}
.brand__word {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--ink);
}
.brand__tag {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.links {
  display: flex;
  gap: 30px;
}
.links__item {
  position: relative;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding: 8px 2px;
}
.links__item::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 2px;
  height: 2px;
  background: var(--brick);
  transition:
    left 0.18s ease,
    right 0.18s ease;
}
.links__item:hover::after,
.links__item--active::after {
  left: 0;
  right: 0;
}
.links__item--active {
  color: var(--brick);
}

.account {
  display: flex;
  align-items: center;
  gap: 12px;
}
.admin-chip {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--ink);
  color: var(--rice);
  padding: 5px 11px;
  border-radius: 999px;
}
.admin-chip:hover {
  background: var(--brick);
}
.account__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--turmeric-soft);
  color: var(--brick-dark);
  font-weight: 700;
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.account__name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink-soft);
  white-space: nowrap;
}
.account__logout {
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--brick);
  border: 1.5px solid var(--brick);
  border-radius: 999px;
  padding: 7px 14px;
  white-space: nowrap;
}
.account__logout:hover {
  background: var(--brick);
  color: var(--rice);
}

.menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
}
.menu-btn span {
  width: 22px;
  height: 2px;
  background: var(--ink);
}

@media (max-width: 760px) {
  .menu-btn {
    display: flex;
  }
  .account__name {
    display: none;
  }
  .brand__tag {
    display: none;
  }
  .links {
    display: none;
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    padding: 12px 24px 20px;
    gap: 14px;
  }
  .links--open {
    display: flex;
  }
}
</style>
