<script lang="ts" setup>
const appDrawer = useAttrs();
</script>

<template>
  <div
    :class="`offcanvas ${appDrawer.dialog} rounded-top rounded-4 bg-light border-0`"
    tabindex="-1"
    :id="`${appDrawer.content}`"
    :aria-labelledby="`${appDrawer.content}Label`"
  >
    <div class="offcanvas-header">
      <div class="offcanvas-title">
        <h6 class="mb-1" :id="`${appDrawer.content}Label`">
          {{ appDrawer.title }}
        </h6>
        <p class="caption mb-0" v-if="appDrawer.caption">
          {{ appDrawer.caption }}
        </p>
      </div>
      <button
        type="button"
        class="btn btn-sm p-0 border-0"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="bi bi-x-circle-fill"></i>
      </button>
    </div>
    <div class="offcanvas-body pt-0 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <ContentsActivity
            v-if="appDrawer.content === `activity-${appDrawer.uuid}`"
            :content="appDrawer.content"
            :data="appDrawer.data"
          />
          <ContentsAsset
            v-if="appDrawer.content === `trade-${appDrawer.uuid}`"
            :content="appDrawer.content"
            :data="appDrawer.data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.offcanvas {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
</style>
