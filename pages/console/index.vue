<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

const options = [
  {
    icon: "stack",
    title: "Assets",
    caption: "Add or manage existing assets",
    route: "/console/assets",
  },
  {
    icon: "currency-exchange",
    title: "Orders",
    caption: "View and manage customers orders",
    route: "/console/orders",
  },
  {
    icon: "people-fill",
    title: "Customers",
    caption: "View and manage customers",
    route: "/console/customers",
  },
  {
    icon: "file-earmark-text-fill",
    title: "Transactions",
    caption: "View all customers transactions",
    route: "/console/transactions",
  },
];
</script>

<template>
  <div class="container-fluid py-3" id="console">
    <Appbar :title="true" :hasPrev="true" class="bg-primary fixed-top" />
    <div class="h-52"></div>
    <div class="row g-4 align-items-center justify-content-center">
      <div class="col-lg-5">
        <div class="list-group rounded-4 py-2 bg-white">
          <ListView
            :icon="item.icon"
            :title="item.title"
            :caption="item.caption"
            :route="true"
            icHolder="primary"
            icHolderInner="warning"
            icHolderInnerIcon="primary"
            :to="item.route"
            v-for="(item, index) in options"
            :key="index"
            @click="$router.push(item.route)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
