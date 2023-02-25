<script lang="ts" setup>
const listViewProps = useAttrs();
</script>

<template>
  <div class="list-group" id="listView">
    <div
      class="list-group-item rounded-0 border-0 border-bottom border-light"
      v-if="listViewProps.header"
    >
      <div class="row gy-0 g-3 align-items-center justify-content-between py-1">
        <div class="col-auto"><span>Recent</span></div>
        <div class="col-auto">
          <span><NuxtLink to="/activities">Show all</NuxtLink></span>
        </div>
      </div>
    </div>
    <div
      class="list-group-item rounded-0 border-0 border-bottom border-light"
      v-for="(item, index) in listViewProps.data"
      :key="index"
    >
      <div class="row gy-0 g-3 align-items-center justify-content-center py-1">
        <div class="col-auto">
          <div
            class="ic-holder d-flex align-items-center justify-content-center rounded-circle bg-success"
          >
            <i class="bi bi-lightning-charge-fill text-white"></i>
          </div>
        </div>
        <div class="col">
          <p class="mb-0">iTunes trade</p>
          <small>05:13am</small>
        </div>
        <div class="col-auto text-end">
          <p class="mb-0">
            {{
              (100 * item).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
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

p,
span {
  font-size: 14px;
}

small {
  font-size: 12px;
  color: var(--bs-secondary);
}

.list-group-item:last-of-type {
  border-bottom: 0 !important;
}

.ic-holder {
  width: 38px;
  height: 38px;
}
</style>
