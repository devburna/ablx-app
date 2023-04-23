<script lang="ts" setup>
const isLoading = useIsLoading();
const customers = useCustomers();
</script>

<template>
  <div class="container-fluid bg-light p-0 h-100">
    <Loading v-if="isLoading" />
    <slot />
    <div v-if="customers.length">
      <AppDrawer
        v-for="(item, index) in customers"
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
