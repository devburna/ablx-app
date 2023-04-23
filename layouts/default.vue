<script lang="ts" setup>
const isLoading = useIsLoading();
</script>

<template>
  <div class="container-fluid bg-light p-0 h-100">
    <Loading v-if="isLoading" />
    <slot />
  </div>
</template>

<style scoped></style>
