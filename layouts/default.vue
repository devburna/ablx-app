<script lang="ts" setup>
const isLoading = useIsLoading();
const activities = useActivity();
const orders = useOrders();
const customers = useCustomers();
const assets = useTrade();
</script>

<template>
  <div class="container-fluid bg-light p-0 h-100">
    <Loading v-if="isLoading" />
    <slot />
    <div v-if="activities.orders">
      <AppDrawer
        v-for="(item, index) in activities.orders"
        :key="index"
        :uuid="index"
        :content="`activity-${index}`"
        :data="item"
        title="Order details"
        dialog="offcanvas-bottom h-75"
      />
    </div>
    <div v-if="activities.transactions">
      <AppDrawer
        v-for="(item, index) in activities.transactions"
        :key="index"
        :uuid="index"
        :content="`activity-${index}`"
        :data="item"
        title="Activity details"
        dialog="offcanvas-bottom h-75"
      />
    </div>
    <div v-if="orders.length">
      <AppDrawer
        v-for="(item, index) in orders"
        :key="index"
        :uuid="index"
        :content="`activity-${index}`"
        :data="item"
        title="Order details"
        dialog="offcanvas-bottom h-75"
      />
    </div>
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
    <div v-if="assets">
      <div v-for="(item, index) in assets" :key="index">
        <div v-if="item">
          <AppDrawer
            v-for="(asset, indexx) in item"
            :key="indexx"
            :uuid="indexx"
            :content="`trade-${index}-${indexx}`"
            :data="asset"
            :title="asset.name"
            :caption="asset.type"
            dialog="offcanvas-bottom h-75"
            backdrop="n"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
