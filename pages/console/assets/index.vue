<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});
</script>

<template>
  <Trader />
</template>

<style scoped></style>
