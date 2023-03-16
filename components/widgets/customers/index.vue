<script lang="ts" setup>
const customersProps = useAttrs();
useCustomers();
</script>

<template>
  <div class="list-group bg-white rounded-4 py-2" id="customers">
    <ListView
      icon="person-fill"
      :title="item.name"
      :caption="item.email"
      :route="true"
      icHolder="primary"
      icHolderInner="warning"
      icHolderInnerIcon="primary"
      data-bs-toggle="offcanvas"
      :data-bs-target="`#customer-${index}`"
      v-for="(item, index) in customersProps.data"
      :key="index"
    />
  </div>
</template>

<style scoped></style>
