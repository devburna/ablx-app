<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

useOrder().all();
const orders = useOrders();
</script>

<template>
  <div class="container-fluid py-3" id="orders">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary fixed-top"
      name="Orders"
    />
    <div class="h-52"></div>
    <div class="row g-0 align-items-center justify-content-center">
      <div class="col-lg-5">
        <WidgetsActivities :data="orders" v-if="orders.length" />
        <Message caption="No order found 😥" v-else />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
