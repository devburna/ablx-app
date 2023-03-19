<script lang="ts" setup>
const activities = useAttrs();
</script>

<template>
  <div class="list-group bg-white rounded-4 py-2">
    <div v-for="(item, index) in activities.data" :key="index">
      <!-- <ListView
        :img="item.rate.asset.image_url"
        :title="item.narration || item.rate.name"
        :caption="$timeAgo(item.created_at)"
        :trailing="$currency(item.amount, 'NGN')"
        :subTrailing="'&nbsp;'"
        :status="item.status"
        icHolderInner="white"
        data-bs-toggle="offcanvas"
        :data-bs-target="`#activity-${index}`"
        v-if="item.rate"
      />
      <ListView
        :icon="`${
          ['Debit'].includes(item.type) ? 'cloud-arrow-down-fill' : 'cloud-arrow-up-fill'
        }`"
        :title="item.narration || item.rate.name"
        :caption="$timeAgo(item.created_at)"
        :trailing="$currency(item.amount, 'NGN')"
        :subTrailing="'&nbsp;'"
        :status="item.type"
        icHolderInner="white"
        data-bs-toggle="offcanvas"
        :data-bs-target="`#activity-${index}`"
        v-else
      /> -->
    </div>
  </div>
</template>

<style scoped></style>
