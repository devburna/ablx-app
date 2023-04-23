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
  <div>
    <div
      class="container-fluid bg-white fixed-bottom text-center py-2"
      id="bottomNav"
    >
      <div class="container">
        <div
          class="row row-cols-4 g-4 align-items-center justify-content-around"
        >
          <NuxtLink
            :to="item.route"
            class="col link"
            v-for="(item, index) in navItems"
            :key="index"
          >
            <i :class="`bi bi-${item.icon}-fill icon`"></i>
            <small class="d-block">{{ item.name }}</small>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="h-64"></div>
  </div>
</template>

<style scoped>
.link {
  color: var(--bs-secondary);
}

.exact-active-class-link {
  color: var(--bs-primary);
}

small {
  font-size: 11px;
}
.icon {
  font-size: 20px;
}

.h-64 {
  height: 65px;
}
</style>
