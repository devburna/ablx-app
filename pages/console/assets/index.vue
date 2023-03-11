<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      name="Assets"
    />
  </div>
</template>

<style scoped></style>
