<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar :title="true" />
    <div class="container-fluid h-100 py-3" id="activities">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5">
            <WidgetsActivities
              class="rounded rounded-4"
              :data="useActivity().value"
              v-if="useActivity().value"
            />
          </div>
        </div>
      </div>
    </div>
    <BottomNav />
    <div v-if="useActivity().value.length">
      <AppDrawer
        v-for="(item, index) in useActivity().value"
        :key="index"
        :uuid="index"
        :content="`activity-${index}`"
        :data="item"
        title="Activity Details"
        dialog="offcanvas-bottom h-75"
      />
    </div>
  </div>
</template>

<style scoped></style>
