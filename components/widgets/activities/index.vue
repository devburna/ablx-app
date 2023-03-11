<script lang="ts" setup>
const activitiesProps = useAttrs();
useActivities();
</script>

<template>
  <div class="list-group rounded-4 py-1 bg-white" id="activities">
    <ListView
      title="Recent"
      subTrailing="Show all"
      v-if="activitiesProps.header"
    />
    <ListView
      :icon="`${
        ['Order'].includes(item.channel) ? 'lightning-fill' : 'bag-check-fill'
      }`"
      :title="item.user.name"
      :caption="$timeAgo(item.created_at)"
      :trailing="
        Number(item.amount).toLocaleString('en-NG', {
          style: 'currency',
          currency: 'NGN',
        })
      "
      :subTrailing="item.status"
      :status="item.status"
      data-bs-toggle="offcanvas"
      :data-bs-target="`#activity-${index}`"
      v-for="(item, index) in activitiesProps.data"
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
