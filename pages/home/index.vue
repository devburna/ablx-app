<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div class="h-100 bg-light">
    <WidgetsBalance />
    <div class="container-fluid py-3">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5">
            <WidgetsListView
              class="rounded rounded-4"
              :data="10"
              :header="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
