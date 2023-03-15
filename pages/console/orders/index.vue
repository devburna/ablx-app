<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

useOrder().all();
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      name="Orders"
    />
    <div class="container-fluid py-3" id="orders">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-5">
          <WidgetsActivities
            :data="useOrders().value"
            v-if="useOrders().value"
          />
          <Message caption="No order found 😥" v-else />
        </div>
      </div>
    </div>
    <div v-if="useOrders().value.length">
      <AppDrawer
        v-for="(item, index) in useOrders().value"
        :key="index"
        :uuid="index"
        :content="`activity-${index}`"
        :data="item"
        title="Order details"
        dialog="offcanvas-bottom h-75"
      />
    </div>
  </div>
</template>

<style scoped></style>
