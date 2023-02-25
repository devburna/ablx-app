<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div class="container-fluid p-0">
    <Appbar />
  </div>
</template>

<style scoped></style>
