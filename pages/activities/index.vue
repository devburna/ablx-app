<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar :title="true" class="bg-primary sticky-top" />
    <div class="container-fluid h-100 py-3" id="activities">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5 mb-4">
            <WidgetsActivities
              class="rounded rounded-4 mb-5"
              :data="useActivity().value"
              v-if="useActivity().value"
            />
            <Message caption="No activity found 😥" v-else />
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
