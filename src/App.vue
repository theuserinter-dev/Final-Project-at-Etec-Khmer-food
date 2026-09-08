<script setup lang="ts">
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
</script>

<template>
  <template v-if="route.name === 'login'">
    <router-view />
  </template>
  <template v-else>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </template>
</template>
