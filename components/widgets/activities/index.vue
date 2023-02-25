<script lang="ts" setup>
const activitiesProps = useAttrs();
useActivities();
</script>

<template>
  <div class="list-group rounded-4" id="listView">
    <div
      class="list-group-item rounded-0 border-0 border-bottom border-light"
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
    <div
      class="list-group-item rounded-0 border-0 border-bottom border-light"
      v-for="(item, index) in activitiesProps.data"
      :key="index"
    >
      <div class="row gy-0 g-3 align-items-center justify-content-center py-2">
        <div class="col-auto">
          <div
            :class="`ic-holder d-flex align-items-center justify-content-center rounded-circle bg-${item.status}`"
          >
            <div
              class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-white"
            >
              <i
                :class="`bi bi-${
                  ['Order'].includes(item.kind) ? 'lightning' : 'send'
                }-fill text-${item.status} icon`"
              ></i>
            </div>
          </div>
        </div>
        <div class="col-6 me-auto">
          <p class="title mb-0 text-truncate">
            {{
              ["Order"].includes(item.kind)
                ? item.rate.asset.name
                : item.narration
            }}
          </p>
          <p class="caption mb-0">{{ $timeAgo(item.created_at) }}</p>
        </div>
        <div class="col-auto text-end">
          <p class="title mb-0">
            {{
              Number(item.amount).toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#listView {
  overflow: hidden;
}

.list-group-item:last-of-type {
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
