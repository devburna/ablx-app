<script lang="ts" setup>
const appDrawerContent = useAttrs();
</script>

<template>
  <div class="pb-5">
    <ContentsDetails
      :title="`${appDrawerContent.data.name}`"
      :caption="`${appDrawerContent.data.email}`"
      :data="appDrawerContent.data"
    />
  </div>
</template>

<style scoped></style>
