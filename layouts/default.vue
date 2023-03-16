<script lang="ts" setup>
const activities = useActivity();
</script>

<template>
  <div class="container-fluid bg-light p-0 h-100">
    <slot />
    <div v-if="activities.length">
      <AppDrawer
        v-for="(item, index) in activities"
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
