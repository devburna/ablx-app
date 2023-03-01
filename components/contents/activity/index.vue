<script lang="ts" setup>
const appDrawerContent = useAttrs();
</script>

<template>
  <div class="pb-5">
    <div class="py-3 text-center">
      <h6 class="mb-1">
        {{ appDrawerContent.data.amount }}
      </h6>
      <p class="caption">
        {{ appDrawerContent.data.narration }}
      </p>
    </div>
    <div class="list-group rounded-4 py-1 bg-white mb-4">
      <div v-for="(item, index) in appDrawerContent.data" :key="index">
        <div class="list-group-item border-0" v-if="typeof item === 'string'">
          <h6 class="caption text-capitalize mb-1">{{ index }}</h6>
          <p class="title text-dark mb-0">{{ item }}</p>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-lg w-100">
      Share Receipt
    </button>
  </div>
</template>

<style scoped></style>
