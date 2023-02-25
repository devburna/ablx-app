<script lang="ts" setup>
const appbar = useRoute();
const appbarProps = useAttrs();
</script>

<template>
  <div
    class="list-group list-group-horizontal align-items-center position-relative sticky-top lh-lg"
    id="appbar"
  >
    <div class="list-group-item text-center w-100" v-if="appbarProps.title">
      <span class="title text-capitalize">{{ appbar.name }}</span>
    </div>
    <div class="position-absolute">
      <button
        onclick="history.back()"
        class="list-group-item w-auto pe-0"
        v-if="appbarProps.hasPrev"
      >
        <i class="bi bi-chevron-left fs-4"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.list-group,
.list-group-item {
  border-radius: 0 !important;
}
.list-group-item {
  border: 0;
}
</style>
