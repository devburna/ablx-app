<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

useCustomer().all();
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      name="Customers"
    />
    <div class="container-fluid py-3" id="customers">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-5">
          <WidgetsCustomers
            :data="useCustomers().value"
            v-if="useCustomers().value"
          />
          <Message caption="No activity found 😥" v-else />
        </div>
      </div>
    </div>
    <div v-if="useCustomers().value.length">
      <AppDrawer
        v-for="(item, index) in useCustomers().value"
        :key="index"
        :uuid="index"
        :content="`customer-${index}`"
        :data="item"
        :title="item.name"
        dialog="offcanvas-bottom h-75"
      />
    </div>
  </div>
</template>

<style scoped></style>
