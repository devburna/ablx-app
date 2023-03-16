<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
const activities = useActivity();
</script>

<template>
  <div class="container-fluid py-3" id="activities">
    <Appbar :title="true" class="bg-primary fixed-top" />
    <div class="h-52"></div>
    <div class="row g-0 align-items-center justify-content-center">
      <div class="col-lg-5">
        <WidgetsActivities :data="activities" v-if="activities.length" />
        <Message caption="No activity found 😥" v-else />
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<style scoped></style>
