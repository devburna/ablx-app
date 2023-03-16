<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
useTrader().assets();
</script>

<template>
  <Trader />
</template>

<style scoped></style>
