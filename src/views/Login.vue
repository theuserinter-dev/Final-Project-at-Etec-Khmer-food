<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const route = useRoute();
const router = useRouter();
const { login } = useAuthStore();

const form = reactive({ name: "", email: "", password: "" });
const errors = ref<{ name?: string; email?: string; password?: string }>({});

function submit() {
  const next: typeof errors.value = {};
  if (!form.name.trim()) next.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    next.email = "Please enter a valid email.";
  if (form.password.length < 4)
    next.password = "Password must be at least 4 characters.";
  errors.value = next;
  if (Object.keys(next).length > 0) return;

  login(form.name, form.email);
  const redirect =
    typeof route.query.redirect === "string" ? route.query.redirect : "/";
  router.push(redirect);
}
</script>

<template>
  <div class="login">
    <div class="login__card">
      <p class="login__mark">ខ្មែរ</p>
      <h1>Welcome back</h1>
      <p class="login__sub">Sign in to browse the menu and place an order.</p>

      <div class="field">
        <label for="login-name">Name</label>
        <input
          id="login-name"
          v-model="form.name"
          type="text"
          placeholder="Sok Dara"
          @keyup.enter="submit"
        />
        <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
      </div>

      <div class="field">
        <label for="login-email">Email</label>
        <input
          id="login-email"
          v-model="form.email"
          type="email"
          placeholder="sokdara@example.com"
          @keyup.enter="submit"
        />
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
      </div>

      <div class="field">
        <label for="login-password">Password</label>
        <input
          id="login-password"
          v-model="form.password"
          type="password"
          placeholder="••••••••"
          @keyup.enter="submit"
        />
        <span v-if="errors.password" class="error-text">{{
          errors.password
        }}</span>
      </div>

      <button class="btn btn-primary login__submit" @click="submit">
        Log In
      </button>
      <p class="login__note">
        Demo site — any name, valid-looking email, and a 4+ character password
        will work.
      </p>
    </div>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    var(--turmeric-soft) 0%,
    var(--rice) 100%
  );
  padding: 24px;
}
.login__card {
  width: 100%;
  max-width: 380px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 40px 32px;
  text-align: center;
}
.login__mark {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--brick);
  margin: 0 0 8px;
}
.login__sub {
  margin-bottom: 24px;
}
.login__card .field {
  text-align: left;
}
.login__submit {
  width: 100%;
  padding: 13px;
  margin-top: 4px;
}
.login__note {
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin: 16px 0 0;
}
</style>
