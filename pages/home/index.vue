<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const { data } = await useOrders().list();
</script>

<template>
  <div class="container-fluid p-0 bg-light">
    <div class="row g-3 align-items-center justify-content-center">
      <div class="col-lg-12">
        <WidgetsBalance />
      </div>
      <div class="col-lg-5">
        <WidgetsQuickActions class="mx-3" style="margin-top: -89.5px" />
      </div>
      <div class="col-12 mt-2"></div>
      <div class="col-lg-5">
        <WidgetsActivities
          :hasMore="true"
          class="mb-4 mx-3"
          :data="data.data.slice(0, 5)"
          v-if="data && data.data.length"
        />
        <Message
          title="No recent activities"
          caption="All your recent activities will show up here"
          v-else
        />
      </div>
    </div>
    <BottomNav />
    <div v-if="data && data.data.length">
      <AppDrawer
        v-for="(item, index) in data.data.slice(0, 5)"
        :key="index"
        :uuid="index"
        :content="`activity-${index}`"
        :data="item"
        title="Details"
        dialog="offcanvas-bottom h-75"
      />
    </div>
  </div>
</template>

<style scoped></style>
