<script lang="ts" setup>
const customersProps = useAttrs();
useCustomers();
</script>

<template>
  <div class="list-group rounded-4 py-1 bg-white" id="customers">
    <ListView
      icon="person-fill"
      :title="item.name"
      :caption="item.email"
      :trailing="
        Number(item.wallet.balance).toLocaleString('en-NG', {
          style: 'currency',
          currency: 'NGN',
        })
      "
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

<style scoped>
#listView {
  overflow: hidden;
}

.activity:last-of-type {
  border-bottom: 0 !important;
}
</style>
