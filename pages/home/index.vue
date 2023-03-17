<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

useActivities();
const activities = useActivity();
</script>

<template>
  <div class="container-fluid p-0 bg-light">
    <div class="row g-3 align-items-center justify-content-center">
      <div class="col-lg-12">
        <WidgetsBalance />
      </div>
      <div class="col-lg-5">
        <WidgetsQuickActions class="mx-3" style="margin-top: -89.5px" />
      </div>
      <div class="col-lg-5">
        <WidgetsActivities
          class="mb-4 mx-3"
          :data="activities.orders.slice(0, 5)"
          v-if="activities.orders"
        />
        <Message caption="No order found 😥" v-else />
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<style scoped></style>
