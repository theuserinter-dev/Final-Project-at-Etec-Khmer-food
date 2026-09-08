<script setup lang="ts">
import { computed, ref } from "vue";
import { useAuthStore } from "../store/auth";
import { foods } from "../data/foods";

const { state, removeUser, setUserRole } = useAuthStore();

type Tab = "users" | "products";
const activeTab = ref<Tab>("users");

const users = computed(() =>
  [...state.users].sort(
    (a, b) => new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime(),
  ),
);

const selectedEmail = ref<string | null>(null);
const selectedUser = computed(
  () => users.value.find((u) => u.email === selectedEmail.value) ?? null,
);

function viewUser(email: string) {
  selectedEmail.value = email;
}
function closeDetail() {
  selectedEmail.value = null;
}
function formatDate(iso: string) {
  return new Date(iso).toLocaleString();
}
function toggleRole(email: string, currentRole: string) {
  setUserRole(email, currentRole === "admin" ? "user" : "admin");
}
function confirmRemove(email: string) {
  if (confirm(`Remove ${email} from the user list?`)) {
    removeUser(email);
    if (selectedEmail.value === email) closeDetail();
  }
}
</script>

<template>
  <div class="admin">
    <div class="container admin__head">
      <h1>Admin Dashboard</h1>
      <p class="admin__sub">
        Manage the people and the menu behind Khmer Food.
      </p>

      <div class="tabs">
        <button
          class="tabs__btn"
          :class="{ 'tabs__btn--active': activeTab === 'users' }"
          @click="activeTab = 'users'"
        >
          Users
        </button>
        <button
          class="tabs__btn"
          :class="{ 'tabs__btn--active': activeTab === 'products' }"
          @click="activeTab = 'products'"
        >
          Products
        </button>
      </div>
    </div>

    <div class="container">
      <!-- USERS TAB -->
      <section v-if="activeTab === 'users'">
        <h2 class="section-title">User Management</h2>
        <p v-if="users.length === 0" class="empty">No users yet.</p>
        <div v-else class="grid">
          <article v-for="u in users" :key="u.email" class="user-card">
            <span v-if="u.role === 'admin'" class="user-card__crown">★</span>
            <p class="user-card__name">{{ u.name }}</p>
            <p class="user-card__email">{{ u.email }}</p>
            <span
              class="role-badge"
              :class="{ 'role-badge--admin': u.role === 'admin' }"
              >{{ u.role }}</span
            >
            <button class="user-card__link" @click="viewUser(u.email)">
              View Detail
            </button>
          </article>
        </div>
      </section>

      <!-- PRODUCTS TAB -->
      <section v-else>
        <h2 class="section-title">Product Management</h2>
        <p class="section-note">{{ foods.length }} dishes on the menu.</p>
        <div class="grid">
          <article v-for="f in foods" :key="f.id" class="user-card">
            <p class="user-card__name">{{ f.name }}</p>
            <p class="user-card__email">
              {{ f.category }} · ${{ f.price.toFixed(2) }}
            </p>
            <span class="role-badge">{{
              f.popular ? "Popular" : "Standard"
            }}</span>
            <router-link :to="`/foods/${f.id}`" class="user-card__link"
              >View Detail</router-link
            >
          </article>
        </div>
      </section>
    </div>

    <!-- USER DETAIL MODAL -->
    <div v-if="selectedUser" class="modal" @click.self="closeDetail">
      <div class="modal__card">
        <button class="modal__close" @click="closeDetail" aria-label="Close">
          ×
        </button>
        <p class="modal__name">{{ selectedUser.name }}</p>
        <p class="modal__email">{{ selectedUser.email }}</p>
        <span
          class="role-badge"
          :class="{ 'role-badge--admin': selectedUser.role === 'admin' }"
        >
          {{ selectedUser.role }}
        </span>
        <p class="modal__meta">
          Last login: {{ formatDate(selectedUser.lastLogin) }}
        </p>

        <div class="modal__actions">
          <button
            class="btn btn-outline"
            @click="toggleRole(selectedUser.email, selectedUser.role)"
          >
            {{ selectedUser.role === "admin" ? "Remove Admin" : "Make Admin" }}
          </button>
          <button
            class="btn modal__delete"
            @click="confirmRemove(selectedUser.email)"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin__head {
  padding: 40px 24px 24px;
}
.admin__sub {
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}
.tabs__btn {
  padding: 10px 22px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  background: var(--turmeric-soft);
  color: var(--brick-dark);
}
.tabs__btn--active {
  background: var(--brick);
  color: var(--rice);
}

.section-title {
  margin-top: 32px;
}
.section-note {
  color: var(--ink-soft);
  margin-bottom: 20px;
}
.empty {
  color: var(--ink-soft);
  padding: 24px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
  padding-bottom: 80px;
}

.user-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 20px 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.user-card__crown {
  position: absolute;
  top: 10px;
  right: 14px;
  color: var(--turmeric);
}
.user-card__name {
  font-weight: 700;
  margin: 0;
}
.user-card__email {
  font-size: 0.85rem;
  color: var(--ink-soft);
  margin: 0 0 2px;
}
.user-card__link {
  margin-top: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--brick);
}
.user-card__link:hover {
  text-decoration: underline;
}

.role-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--turmeric-soft);
  color: var(--brick-dark);
  text-transform: capitalize;
}
.role-badge--admin {
  background: var(--ink);
  color: var(--rice);
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(43, 27, 18, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 50;
}
.modal__card {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius-md);
  padding: 32px 28px;
  width: 100%;
  max-width: 360px;
  text-align: center;
}
.modal__close {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 1.4rem;
  color: var(--ink-soft);
  line-height: 1;
}
.modal__name {
  font-weight: 700;
  font-size: 1.1rem;
  margin: 8px 0 0;
}
.modal__email {
  color: var(--ink-soft);
  margin: 0 0 10px;
}
.modal__meta {
  font-size: 0.82rem;
  color: var(--ink-soft);
  margin: 14px 0 0;
}
.modal__actions {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal__delete {
  background: var(--error);
  color: var(--rice);
}
.modal__delete:hover {
  opacity: 0.9;
}
</style>
