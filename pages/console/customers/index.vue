<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

const { data } = await useCustomers().list();
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
        <WidgetsCustomers :data="data.data" v-if="data && data.data.length" />
        <Message caption="No customers found 😥" v-else />
      </div>
    </div>
    <div v-if="data && data.data.length">
      <AppDrawer
        v-for="(item, index) in data.data"
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
