<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const { data } = await useOrders().list();
</script>

<template>
  <div class="container-fluid p-0 py-3" id="orders">
    <Appbar :hasPrev="true" :title="true" class="bg-primary fixed-top" />
    <div class="h-52"></div>
    <div class="row g-0 align-items-center justify-content-center">
      <div class="col-lg-5">
        <WidgetsActivities
          class="mb-4 mx-3"
          :data="data.data"
          v-if="data && data.data.length"
        />
        <Message caption="No order found 😥" v-else />
      </div>
    </div>
    <div v-if="data && data.data.length">
      <AppDrawer
        v-for="(item, index) in data.data"
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
