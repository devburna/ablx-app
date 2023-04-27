<script lang="ts" setup>
const quickActions = [
  {
    icon: "send",
    title: "Transfer",
    caption: "Send money locally or abroad",
    route: "/transfer",
  },
  {
    icon: "lightning",
    title: "Start trade",
    caption: "Click to start trading",
    route: "/trade",
  },
  // {
  //   icon: "file-earmark-text",
  //   title: "Pay bills",
  //   caption: "Buy airtime or pay utility bills",
  //   route: "/bills",
  // },
];
</script>

<template>
  <div class="list-group bg-white rounded-4 py-2">
    <ListView
      :icon="`${item.icon}-fill`"
      :title="item.title"
      :caption="item.caption"
      custom="border-bottom border-light"
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
