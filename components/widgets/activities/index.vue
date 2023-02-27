<script lang="ts" setup>
const activitiesProps = useAttrs();
useActivities();
</script>

<template>
  <div class="list-group rounded-4 py-1 bg-white" id="listView">
    <div
      class="list-group-item border-0 rounded-0 py-2"
      v-if="activitiesProps.header"
    >
      <div class="row gy-0 g-3 align-items-center justify-content-between py-1">
        <div class="col-auto"><span class="title">Recent</span></div>
        <div class="col-auto">
          <span class="caption"
            ><NuxtLink to="/activities">Show all</NuxtLink></span
          >
        </div>
      </div>
    </div>
    <button
      class="list-group-item border-0 rounded-0 py-2 activity"
      data-bs-toggle="offcanvas"
      :data-bs-target="`#activity-${index}`"
      v-for="(item, index) in activitiesProps.data"
      :key="index"
    >
      <div class="row gy-0 g-3 align-items-center justify-content-center py-1">
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
          <p class="title mb-0 text-truncate">
            {{ item.narration }}
          </p>
          <p class="caption mb-0">{{ $timeAgo(item.created_at) }}</p>
        </div>
        <div class="col-auto text-end">
          <p class="title mb-0">
            {{ item.amount }}
          </p>
          <p :class="`caption text-${item.status} mb-0`">
            {{ item.status }}
          </p>
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

.ic-holder {
  width: 36px;
  height: 36px;
}
.ic-holder-inner {
  width: 23px;
  height: 23px;
}

.icon {
  font-size: 13px;
}
</style>
