<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const route = useRoute();
const router = useRouter();
const { state, logout } = useAuthStore();
const open = ref(false);

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

function closeMenu() {
  open.value = false;
}

function handleLogout() {
  logout();
  closeMenu();
  router.push("/login");
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar__inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <span class="brand__badge">ខ្មែរ</span>
        <span class="brand__text">
          <span class="brand__word">Khmer Food</span>
          <span class="brand__tag">Taste of Cambodia</span>
        </span>
      </router-link>

      <nav class="links links--desktop">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="links__item"
          :class="{ 'links__item--active': route.path === link.to }"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="account account--desktop">
        <template v-if="state.user">
          <router-link to="/admin" class="admin-chip">Admin</router-link>
          <span class="account__avatar">{{ initials }}</span>
          <span class="account__name">{{ state.user.name }}</span>
          <button class="account__logout" @click="handleLogout">Log Out</button>
        </template>
      </div>

      <button
        class="menu-btn"
        @click="open = !open"
        :aria-expanded="open"
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="mobile-menu" :class="{ 'mobile-menu--open': open }">
      <nav class="mobile-menu__links">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="mobile-menu__item"
          :class="{ 'mobile-menu__item--active': route.path === link.to }"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div v-if="state.user" class="mobile-menu__account">
        <router-link to="/admin" class="mobile-menu__admin" @click="closeMenu">
          <span class="account__avatar">{{ initials }}</span>
          <span>
            <strong>{{ state.user.name }}</strong>
            <span class="mobile-menu__admin-label">Go to Admin →</span>
          </span>
        </router-link>
        <button class="mobile-menu__logout" @click="handleLogout">
          Log Out
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: var(--forest);
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 3px solid var(--gold);
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.brand__badge {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: var(--forest);
  font-family: var(--font-display);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: var(--rice);
}
.brand__tag {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
}

.links--desktop {
  display: flex;
  gap: 30px;
}
.links__item {
  position: relative;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(246, 239, 225, 0.7);
  padding: 8px 2px;
}
.links__item::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 2px;
  height: 2px;
  background: var(--gold);
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
  color: var(--gold);
}

.account--desktop {
  display: flex;
  align-items: center;
  gap: 12px;
}
.admin-chip {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--gold);
  color: var(--forest);
  padding: 5px 11px;
  border-radius: 999px;
  white-space: nowrap;
}
.admin-chip:hover {
  background: var(--gold-dark);
}
.account__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--forest);
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
  color: var(--rice);
  white-space: nowrap;
}
.account__logout {
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--gold);
  border: 1.5px solid var(--gold);
  border-radius: 999px;
  padding: 7px 14px;
  white-space: nowrap;
}
.account__logout:hover {
  background: var(--gold);
  color: var(--forest);
}

.menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  flex-shrink: 0;
}
.menu-btn span {
  width: 22px;
  height: 2px;
  background: var(--rice);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: var(--forest-soft);
  padding: 12px 24px 20px;
}
.mobile-menu--open {
  display: flex;
}
.mobile-menu__links {
  display: flex;
  flex-direction: column;
}
.mobile-menu__item {
  padding: 14px 4px;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(246, 239, 225, 0.8);
  border-bottom: 1px solid rgba(224, 169, 58, 0.25);
}
.mobile-menu__item--active {
  color: var(--gold);
}
.mobile-menu__account {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.mobile-menu__admin {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 4px;
}
.mobile-menu__admin strong {
  display: block;
  font-size: 0.92rem;
  color: var(--rice);
}
.mobile-menu__admin-label {
  font-size: 0.78rem;
  color: var(--gold);
  font-weight: 600;
}
.mobile-menu__logout {
  width: 100%;
  padding: 12px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--gold);
  color: var(--gold);
  font-weight: 700;
}
.mobile-menu__logout:hover {
  background: var(--gold);
  color: var(--forest);
}

@media (max-width: 760px) {
  .brand__tag {
    display: none;
  }
  .links--desktop,
  .account--desktop {
    display: none;
  }
  .menu-btn {
    display: flex;
  }
}
</style>
