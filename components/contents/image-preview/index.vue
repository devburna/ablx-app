<script lang="ts" setup>
const imgPreview = useAttrs();
</script>

<template>
  <div>
    <img
      :src="imgPreview.data"
      alt="Preview"
      loading="lazy"
      class="img-fluid"
      v-if="imgPreview.data"
    />
    <div class="text-center">
      <span class="caption">No image to preview 😢</span>
    </div>
  </div>
</template>

<style scoped></style>
