<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <Trader />
</template>

<style scoped></style>
