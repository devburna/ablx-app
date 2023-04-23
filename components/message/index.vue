<script lang="ts" setup>
const messageNote = useAttrs();
</script>

<template>
  <div class="p-5 text-center">
    <h4 class="title" v-if="messageNote?.title">{{ messageNote.title }}</h4>
    <p class="caption" v-html="messageNote.caption"></p>
  </div>
</template>

<style scoped></style>
