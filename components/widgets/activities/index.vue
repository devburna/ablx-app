<script lang="ts" setup>
const activitiesProps = useAttrs();
useActivities();
</script>

<template>
  <div class="list-group rounded-4 py-1 bg-white" id="activities">
    <div
      class="list-group-item border-0 rounded-0"
      v-if="activitiesProps.header"
    >
      <div class="row gy-0 g-3 align-items-center justify-content-between">
        <div class="col-auto"><span class="title">Recent</span></div>
        <div class="col-auto">
          <span class="caption"
            ><NuxtLink to="/activities">Show all</NuxtLink></span
          >
        </div>
      </div>
    </div>
    <button
      class="list-group-item border-0 rounded-0 activity"
      data-bs-toggle="offcanvas"
      :data-bs-target="`#activity-${index}`"
      v-for="(item, index) in activitiesProps.data"
      :key="index"
    >
      <ListView
        :icon="`${
          ['Order'].includes(item.channel) ? 'lightning-fill' : 'send-fill'
        }`"
        :title="item.narration"
        :caption="item.created_at"
        :trailing="item.amount"
        :subTrailing="item.status"
        :status="item.status"
      />
    </button>
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
