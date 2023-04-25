<script lang="ts" setup>
const activities = useAttrs();
</script>

<template>
  <div class="list-group bg-white rounded-4 py-2">
    <ListView
      title="Recent"
      subTrailing="See more"
      @click="$router.push('/orders')"
      v-if="activities.hasMore"
    />
    <div v-for="(item, index) in activities.data" :key="index">
      <ListView
        :icon="`${
          ['Debit'].includes(item.type)
            ? 'cloud-arrow-up-fill'
            : 'cloud-arrow-down-fill'
        }`"
        :img="item?.rate ? item?.rate.asset.image_url : null"
        :title="item.narration || item?.rate.asset.name"
        :caption="$timeAgo(item.created_at)"
        :trailing="
          $currency(item.amount, item?.currency || item?.rate.currency)
        "
        :subTrailing="'&nbsp;'"
        :status="item.status"
        icHolderInner="white"
        data-bs-toggle="offcanvas"
        :data-bs-target="`#activity-${index}`"
      />
    </div>
  </div>
</template>

<style scoped></style>
