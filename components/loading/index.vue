<script lang="ts" setup></script>

<template>
  <div
    class="fixed-top d-flex align-items-center justify-content-center h-100"
    id="loading"
  >
    <img
      src="@/assets/img/loading.gif"
      alt="loading"
      loading="lazy"
      width="20"
      height="20"
    />
  </div>
</template>

<style scoped>
#loading {
  z-index: 9000;
  background: rgba(0, 0, 0, 0.8);
}
</style>
