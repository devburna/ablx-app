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
      <div class="row gy-0 g-3 align-items-center justify-content-between py-1">
        <div class="col-auto">
          <div
            :class="`ic-holder d-flex align-items-center justify-content-center rounded-circle bg-${item.status}`"
          >
            <div
              class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-white"
            >
              <i
                :class="`bi bi-${
                  ['Order'].includes(item.channel) ? 'lightning' : 'send'
                }-fill text-${item.status} icon`"
              ></i>
            </div>
          </div>
        </div>
        <div class="col-6 me-auto text-start">
          <h6 class="title mb-0 text-truncate">
            {{ item.narration }}
          </h6>
          <small class="caption">{{ $timeAgo(item.created_at) }}</small>
        </div>
        <div class="col-auto text-end">
          <h6 class="title mb-0">
            {{ item.amount }}
          </h6>
          <small :class="`caption text-${item.status}`">
            {{ item.status }}
          </small>
        </div>
      </div>
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
