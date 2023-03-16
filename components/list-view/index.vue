<script lang="ts" setup>
const listView = useAttrs();
</script>

<template>
  <div
    :class="`list-group-item border-0 ${listView.custom} d-flex align-items-center gap-3`"
  >
    <div class="py-1" v-if="listView.icon || listView.img">
      <img
        :src="`${listView.img}`"
        alt="image"
        class="ic-holder"
        loading="lazy"
        v-if="listView.img"
      />
      <div
        :class="`ic-holder ic-holder-lg rounded-circle bg-${
          listView.icHolder || listView.status
        }`"
        v-else
      >
        <div
          :class="`ic-holder-inner rounded-circle bg-${
            listView.icHolderInner || listView.status
          }`"
        >
          <i
            :class="`bi bi-${listView.icon} text-${
              listView.icHolderInnerIcon || listView.status
            } caption`"
          ></i>
        </div>
      </div>
    </div>
    <div class="py-1">
      <h6 class="title mb-0">{{ listView.title }}</h6>
      <small class="caption text-muted" v-if="listView.caption">
        {{ listView.caption }}
      </small>
    </div>
    <div class="py-1 text-end ms-auto">
      <i class="bi bi-chevron-right caption" v-if="listView.route"></i>
      <h6 :class="`title text-${listView.status || 'dark'} mb-0`" v-if="listView.trailing">
        {{ listView.trailing }}
      </h6>
      <small
        :class="`caption text-${listView.status || 'muted'}`"
        v-if="listView.subTrailing"
        v-html="listView.subTrailing"
      >
      </small>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 14px;
}
.caption {
  font-size: 13px;
}
</style>
