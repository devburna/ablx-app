<script lang="ts" setup>
const quickActions = [
  {
    icon: "lightning",
    title: "Trade",
    caption: "Click to start trading",
    route: "/trade",
  },
  {
    icon: "file-earmark-text",
    title: "Pay Bills",
    caption: 'Buy airtime or pay utility bills',
    route: "/bills",
  },
  {
    icon: "send",
    title: "Transfer",
    caption: "Send money locally or abroad",
    route: "/transfer",
  },
];
</script>

<template>
  <div class="list-group bg-white rounded-4">
    <button
      class="list-group-item bg border-bottom border-light border-0 d-flex align-items-center gap-3 py-3"
      v-for="(item, index) in quickActions"
      :key="index"
      @click="$router.push(item.route)"
    >
      <div
        class="ic-holder d-flex align-items-center justify-content-center rounded-circle bg-primary"
      >
        <div
          class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-warning"
        >
          <i :class="`bi bi-${item.icon}-fill text-primary icon`"></i>
        </div>
      </div>
      <div class="text-start">
        <p class="title mb-0">{{ item.title }}</p>
        <p class="caption mb-0">{{ item.caption }}</p>
      </div>
    </button>
  </div>
</template>

<style scoped>
.list-group-item:last-of-type {
  border: 0 !important;
}

.ic-holder {
  width: 40px;
  height: 40px;
}

.ic-holder-inner {
  width: 24px;
  height: 24px;
}

.ic-holder .icon {
  font-size: 13px;
}
</style>
