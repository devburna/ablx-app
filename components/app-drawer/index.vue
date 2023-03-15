<script lang="ts" setup>
const appDrawer = useAttrs();
</script>

<template>
  <div
    :class="`offcanvas ${appDrawer.dialog} rounded-top rounded-4 bg-light border-0 shadow`"
    tabindex="-1"
    :id="`${appDrawer.content}`"
    :aria-labelledby="`${appDrawer.content}Label`"
    :data-bs-backdrop="appDrawer.backdrop"
  >
    <div class="offcanvas-header align-items-start">
      <div class="offcanvas-title w-100 p-1">
        <h6
          class="mb-0 d-flex align-items-center justify-content-between"
          :id="`${appDrawer.content}Label`"
        >
          {{ appDrawer.title }}

          <button
            type="button"
            class="btn btn-sm p-0 border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="bi bi-x-circle-fill fs-6"></i>
          </button>
        </h6>
        <p class="caption mb-0" v-if="appDrawer.caption">
          {{ appDrawer.caption }}
        </p>
      </div>
    </div>
    <div class="offcanvas-body py-0">
      <div class="row justify-content-center h-100">
        <div class="col-lg-5 h-100">
          <ContentsActivity
            v-if="appDrawer.content === `activity-${appDrawer.uuid}`"
            :content="appDrawer.content"
            :data="appDrawer.data"
          />
          <ContentsCustomer
            v-if="appDrawer.content === `customer-${appDrawer.uuid}`"
            :content="appDrawer.content"
            :data="appDrawer.data"
          />
          <ContentsAsset
            v-if="
              appDrawer.content ===
              `trade-${appDrawer.data.type}-${appDrawer.uuid}`
            "
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
