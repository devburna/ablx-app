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
    <ListView
      class="list-group-item border-0 rounded-0 border-bottom border-light"
      :icon="`${item.icon}-fill`"
      :title="item.title"
      :caption="item.caption"
      :borderBottom="true"
      icHolder="primary"
      icHolderInner="warning"
      icHolderInnerIcon="primary"
      v-for="(item, index) in quickActions"
      :key="index"
      @click="$router.push(item.route)"
    />
  </div>
</template>

<style scoped>
.list-group-item:last-of-type {
  border: 0 !important;
}
</style>
