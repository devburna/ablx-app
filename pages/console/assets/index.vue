<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

useTrader().assets();
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      name="Assets"
    />
    <div class="container-fluid py-3" id="assets">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-5">
          <WidgetsAssets :data="useTrade().value" v-if="useTrade().value" />
          <Message caption="No customer found 😥" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
