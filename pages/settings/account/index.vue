<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar :hasPrev="true" :title="true" name="Account Information" />
    <div class="container-fluid h-100 py-3" id="trade">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
