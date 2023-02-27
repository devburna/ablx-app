<script lang="ts" setup>
const messageNote = useAttrs();
</script>

<template>
  <div class="p-5 text-center">
    <span class="caption" v-html="messageNote.caption"></span>
  </div>
</template>

<style scoped></style>
