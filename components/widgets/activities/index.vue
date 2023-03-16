<script lang="ts" setup>
const activities = useAttrs();
</script>

<template>
  <div class="list-group bg-white rounded-4 py-2">
    <ListView
      v-for="(item, index) in activities.data"
      :key="index"
      :icon="`${
        ['Order'].includes(item.channel) ? 'lightning-fill' : 'bag-check-fill'
      }`"
      :title="item.user.name"
      :caption="item.created_at"
      :trailing="item.amount"
      :subTrailing="item.status"
      :status="item.status"
      icHolder="warning"
      icHolderInner="white"
      icHolderInnerIcon="warning"
      data-bs-toggle="offcanvas"
      :data-bs-target="`#activity-${index}`"
    />
  </div>
</template>

<style scoped>
.activity:last-of-type {
  border-bottom: 0 !important;
}
</style>
