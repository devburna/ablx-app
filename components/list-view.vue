<script lang="ts" setup>
const listView = useAttrs();
</script>

<template>
  <div
    class="row row-cols-2 gy-0 g-3 align-items-center justify-content-between py-1"
  >
    <div class="col-auto">
      <div
        :class="`ic-holder d-flex align-items-center justify-content-center rounded-circle bg-${
          listView.status || 'muted'
        }`"
      >
        <div
          class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-white"
        >
          <i :class="`bi bi-${listView.icon} icon text-${listView.status}`"></i>
        </div>
      </div>
    </div>
    <div class="col-auto text-start me-auto">
      <h6 class="title mb-0">{{ listView.title }}</h6>
      <small
        :class="`caption text-${listView.status}muted`"
        v-if="listView.caption"
      >
        {{ listView.caption }}
      </small>
    </div>
    <div class="col-auto text-end">
      <i class="bi bi-chevron-right caption" v-if="listView.route"></i>
      <div v-if="listView.trailing && listView.subTrailing">
        <h6 class="title mb-0" v-if="listView.trailing">
          {{ listView.trailing }}
        </h6>
        <small
          :class="`caption text-${listView.status || 'muted'}`"
          v-if="listView.subTrailing"
        >
          {{ listView.subTrailing }}
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
