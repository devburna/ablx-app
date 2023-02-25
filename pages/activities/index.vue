<script lang="ts" setup></script>

<template>
  <div class="h-100 bg-light">
    <div class="container-fluid h-100 py-3" id="activities">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5">
            <WidgetsActivities
              class="rounded rounded-4"
              :data="useActivity().value"
            />
          </div>
        </div>
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<style scoped></style>
