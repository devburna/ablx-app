<script lang="ts" setup>
const appbar = useRoute();
const appbarProps = useAttrs();
</script>

<template>
  <div class="list-group list-group-horizontal align-items-center" id="appbar">
    <div class="list-group-item text-center w-100" v-if="appbarProps.title">
      <p class="title text-capitalize mb-0 lh-1 text-white">
        {{ appbarProps.name || appbar.name }}
      </p>
      <p class="caption mb-0 text-white" v-if="appbarProps.caption">
        {{ appbarProps.caption }}
      </p>
    </div>
    <div class="position-absolute">
      <button
        onclick="history.back()"
        class="list-group-item w-auto px-2 bg-transparent"
        v-if="appbarProps.hasPrev"
      >
        <i class="bi bi-chevron-left fs-4 text-white"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
#appbar {
  height: 52px;
}
.title {
  font-size: 18px;
  font-weight: 500;
}

.list-group,
.list-group-item {
  border-radius: 0 !important;
  background: transparent;
}
.list-group-item {
  border: 0;
}
</style>
