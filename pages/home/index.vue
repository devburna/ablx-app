<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div>
    <WidgetsBalance />
  </div>
</template>

<style scoped></style>
