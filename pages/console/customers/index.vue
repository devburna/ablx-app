<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

useCustomer().all();
const customers = useCustomers();
</script>

<template>
  <div class="container-fluid py-3" id="customers">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary fixed-top"
      name="Customers"
    />
    <div class="h-52"></div>
    <div class="row g-0 align-items-center justify-content-center">
      <div class="col-lg-5">
        <WidgetsCustomers :data="customers" v-if="customers" />
        <Message caption="No customer found 😥" v-else />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
