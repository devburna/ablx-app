<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
</script>

<template>
  <div class="container-fluid bg-light p-0 h-100">
    <WidgetsBalance />
    <div class="row g-3 align-items-center justify-content-center">
      <div class="col-lg-5">
        <WidgetsQuickActions style="margin-top: -84.7px" />
      </div>
      <div class="col-lg-5" v-if="useActivity().value">
        <ListView
          :icon="`${
            ['Order'].includes(item.channel)
              ? 'lightning-fill'
              : 'bag-check-fill'
          }`"
          :title="item.user.name"
          :caption="$timeAgo(item.created_at)"
          :trailing="
            Number(item.amount).toLocaleString('en-NG', {
              style: 'currency',
              currency: 'NGN',
            })
          "
          :subTrailing="item.status"
          :status="item.status"
          data-bs-toggle="offcanvas"
          :data-bs-target="`#activity-${index}`"
          v-for="(item, index) in useActivity().value"
          :key="index"
        />
      </div>
      <div class="col-lg-5" v-else>
        <Message caption="No activity found 😥" />
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
