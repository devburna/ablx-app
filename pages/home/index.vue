<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div class="h-100 bg-light">
    <WidgetsBalance />
    <div class="container-fluid py-3">
      <div class="row g-3 align-items-center justify-content-center">
        <div class="col-lg-5">
          <WidgetsQuickActions style="margin-top: -84.7px" />
        </div>
        <div class="col-lg-5">
          <WidgetsActivities
            :data="useActivity().value.slice(0, 10)"
            :header="true"
            v-if="useActivity().value"
          />
          <Message caption="No activity found 😥" v-else />
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
        title="Activity details"
        dialog="offcanvas-bottom h-75"
      />
    </div>
  </div>
</template>

<style scoped></style>
