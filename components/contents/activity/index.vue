<script lang="ts" setup>
const appDrawerContent = useAttrs();
</script>

<template>
  <div class="pb-5">
    <div class="py-3 text-center">
      <h5 class="mb-1 fw-bold">
        {{ appDrawerContent.data.amount }}
      </h5>
      <p class="mb-2 caption text-muted">
        {{ appDrawerContent.data.narration }}
      </p>
    </div>
    <div class="list-group rounded-4 bg-white py-2 mb-4">
      <div v-for="(item, index) in appDrawerContent.data" :key="index">
        <div class="list-group-item border-0" v-if="typeof item === 'string'">
          <div
            class="row g-0 gx-4 align-items-center justify-content-between px-1"
          >
            <div class="col-auto">
              <span class="caption text-capitalize">{{ index }}</span>
            </div>
            <div class="col text-end">
              <span :class="`caption text-${item} text-dark text-capitalize`">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-lg w-100">Share Receipt</button>
  </div>
</template>

<style scoped></style>
