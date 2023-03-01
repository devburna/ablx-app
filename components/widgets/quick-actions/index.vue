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
    caption: "Buy airtime or pay utility bills",
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
  <div class="list-group rounded-4 py-1 bg-white" id="quickActions">
    <button
      class="list-group-item border-0 border-bottom border-light rounded-0"
      v-for="(item, index) in quickActions"
      :key="index"
      @click="$router.push(item.route)"
    >
      <div class="d-flex align-items-center gap-3 py-1">
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
          <h6 class="title mb-0">{{ item.title }}</h6>
          <small class="caption">{{ item.caption }}</small>
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.list-group-item:last-of-type {
  border: 0 !important;
}
</style>
