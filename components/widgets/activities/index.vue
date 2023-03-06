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
        ['Order'].includes(item.channel) ? 'lightning-fill' : 'send-fill'
      }`"
      :title="item.narration"
      :caption="item.created_at"
      :trailing="item.amount"
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
