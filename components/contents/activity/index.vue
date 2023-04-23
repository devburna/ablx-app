<script lang="ts" setup>
const appDrawerContent = useAttrs();
const user = useUser();
</script>

<template>
  <div class="pb-5">
    <div class="py-2 text-center">
      <div
        :class="`ic-holder ic-holder-xl d-flex align-items-center justify-content-center rounded-circle bg-${appDrawerContent.data.status} mx-auto mb-3`"
      >
        <div
          class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-white"
        >
          <i
            :class="`bi bi-${
              ['Order'].includes(appDrawerContent.data.channel)
                ? 'lightning'
                : 'bag-check'
            }-fill text-${appDrawerContent.data.status} icon`"
          ></i>
        </div>
      </div>
      <h6 class="fw-bold mb-1">
        {{
          $currency(
            appDrawerContent.data.amount,
            appDrawerContent.data?.currency ||
              appDrawerContent.data.rate.currency
          )
        }}
      </h6>
      <p class="caption">
        {{ appDrawerContent.data.narration || appDrawerContent.data.comment }}
      </p>
    </div>
    <div class="list-group rounded-4 py-1 mb-4 bg-white">
      <div class="list-group-item border-bottom border-light border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Ref</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.reference }}</span>
          </div>
        </div>
      </div>
      <div class="list-group-item border-bottom border-light border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Type</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.type }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="appDrawerContent.data.rate"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Item</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.rate.asset.name }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="appDrawerContent.data.rate"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Category</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.rate.asset.type }}</span>
          </div>
        </div>
      </div>
      <div class="list-group-item border-bottom border-light border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Amount</span>
          </div>
          <div class="col-auto">
            <span>{{
              $currency(
                appDrawerContent.data.amount,
                appDrawerContent.data?.currency ||
                  appDrawerContent.data.rate.currency
              )
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="appDrawerContent.data.rate"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Rate</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.rate.name }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="appDrawerContent.data.rate"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Recipient gets</span>
          </div>
          <div class="col-auto">
            <span>{{
              $currency(
                appDrawerContent.data.amount *
                  appDrawerContent.data.rate.buying_at,
                appDrawerContent.data?.currency ||
                  appDrawerContent.data.rate.currency
              )
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="appDrawerContent.data.rate"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Comment</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.comment }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="appDrawerContent.data.narration"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Narration</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.narration }}</span>
          </div>
        </div>
      </div>
      <div class="list-group-item border-bottom border-light border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Status</span>
          </div>
          <div class="col-auto">
            <span :class="`text-${appDrawerContent.data.status}`">{{
              appDrawerContent.data.status
            }}</span>
          </div>
        </div>
      </div>
      <div class="list-group-item border-bottom border-light border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Created</span>
          </div>
          <div class="col-auto">
            <span>{{
              $timeAgo(new Date(appDrawerContent.data.created_at))
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary btn-lg rounded-4 w-100">
      More Actions
    </button>
  </div>
</template>

<style scoped>
.list-group-item:last-of-type {
  border-bottom: 0 !important;
}
</style>
