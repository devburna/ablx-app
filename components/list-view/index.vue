<script lang="ts" setup>
const listView = useAttrs();
</script>

<template>
  <div
    class="list-group-item d-flex align-items-center justify-content-center border-0 gap-3"
  >
    <div class=" py-1" v-if="listView.icon">
      <div
        :class="`ic-holder d-flex align-items-center justify-content-center rounded-circle bg-${
          listView.status || listView.icHolder || 'muted'
        }`"
      >
        <div
          :class="`ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-${
            listView.icHolderInner || 'white'
          }`"
        >
          <i
            :class="`bi bi-${listView.icon} icon text-${
              listView.status || listView.icHolderInnerIcon
            }`"
          ></i>
        </div>
      </div>
    </div>
    <div class="text-start me-auto py-1">
      <h6 class="title mb-0">{{ listView.title }}</h6>
      <small
        :class="`caption text-${listView.status}muted`"
        v-if="listView.caption"
      >
        {{ listView.caption }}
      </small>
    </div>
    <div class="text-end py-1">
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
