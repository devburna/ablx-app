<script lang="ts" setup>
const isLoading = useIsLoading();
</script>

<template>
  <div class="h-100">
    <Loading v-if="isLoading" />
    <slot />
  </div>
</template>

<style scoped></style>
