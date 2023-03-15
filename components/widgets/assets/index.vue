<script lang="ts" setup>
const assetsProps = useAttrs();
useTrader().assets();
</script>

<template>
  <div class="list-group rounded-4 py-1 bg-white" id="assets">
    <ListView
      :img="item.image.secure_url"
      :title="item.name"
      :caption="item.type"
      v-for="(item, index) in assetsProps.data"
      :key="index"
      @click="$router.push(`/console/assets/${item.id}`)"
    />
  </div>
</template>

<style scoped>
#listView {
  overflow: hidden;
}

.activity:last-of-type {
  border-bottom: 0 !important;
}
</style>
