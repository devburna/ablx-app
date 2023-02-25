<script lang="ts" setup>
const bottomNav = useRoute();

const navItems = [
  {
    icon: "house-door",
    name: "Home",
    route: "/home",
  },
  {
    icon: "lightning",
    name: "Trade",
    route: "/trade",
  },
  {
    icon: "bar-chart",
    name: "Activities",
    route: "/activities",
  },
  {
    icon: "gear",
    name: "Settings",
    route: "/settings",
  },
];
</script>

<template>
  <div
    class="container-fluid bg-white fixed-bottom text-center py-2"
    id="bottomNav"
  >
    <div class="container">
      <div class="row row-cols-4 g-4 align-items-center justify-content-around">
        <NuxtLink
          :to="item.route"
          :class="`col text-${
            bottomNav.name === item.name.toLowerCase() ? 'primary' : 'muted'
          }`"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <i :class="`bi bi-${item.icon}-fill icon`"></i>
          <small class="d-block">{{ item.name }}</small>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
small {
  font-size: 12px;
}
.icon {
  font-size: 20px;
}
</style>
