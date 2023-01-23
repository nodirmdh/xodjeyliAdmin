<template>
  <AppNavbar @toggle-menu="toggleMenu" :sidebarOpen="sidebarOpen" />
  <AppSidebar :sidebarOpen="sidebarOpen" />
  <router-view
    :sidebarOpen="sidebarOpen"
    :class="[sidebarOpen ? 'content-small' : 'content-medium']"
  />
</template>
<script setup>
import { ref } from "vue";
import AppNavbar from "@/components/AppNavbar.vue";
import AppSidebar from "@/components/AppSidebar.vue";

let sidebarOpen = ref(false);

const toggleMenu = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>
