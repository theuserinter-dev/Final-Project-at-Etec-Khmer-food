import { reactive } from "vue";

export type Role = "admin" | "user";

export interface AuthUser {
  name: string;
  email: string;
  role: Role;
}

interface DirectoryUser extends AuthUser {
  lastLogin: string;
}

interface AuthState {
  user: AuthUser | null;
  users: DirectoryUser[];
}

const SESSION_KEY = "khmer-food-auth";
const USERS_KEY = "khmer-food-users";

function loadSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function loadUsers(): DirectoryUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: DirectoryUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

const state = reactive<AuthState>({
  user: loadSession(),
  users: loadUsers(),
});

// Every login adds a new person to the directory (or updates them if they
// already exist) — logging out never removes them from here.
function login(name: string, email: string): AuthUser {
  const cleanEmail = email.trim().toLowerCase();
  const existing = state.users.find((u) => u.email === cleanEmail);
  const role: Role = existing ? existing.role : "user";

  const user: AuthUser = { name: name.trim(), email: cleanEmail, role };
  state.user = user;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));

  if (existing) {
    existing.name = user.name;
    existing.lastLogin = new Date().toISOString();
  } else {
    state.users.push({ ...user, lastLogin: new Date().toISOString() });
  }
  saveUsers(state.users);

  return user;
}

// Only clears the current session — the directory (state.users) is untouched.
function logout() {
  state.user = null;
  localStorage.removeItem(SESSION_KEY);
}

// The ONLY function that removes someone from the Admin page.
function removeUser(email: string) {
  state.users = state.users.filter((u) => u.email !== email);
  saveUsers(state.users);
}

function setUserRole(email: string, role: Role) {
  const target = state.users.find((u) => u.email === email);
  if (target) {
    target.role = role;
    saveUsers(state.users);
    if (state.user?.email === email) {
      state.user.role = role;
      localStorage.setItem(SESSION_KEY, JSON.stringify(state.user));
    }
  }
}

export function useAuthStore() {
  return { state, login, logout, removeUser, setUserRole };
}
