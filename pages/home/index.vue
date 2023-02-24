<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div>Page: foo</div>
</template>

<style scoped></style>
