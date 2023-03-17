<script lang="ts" setup>
const appDrawerContent = useAttrs();

const user = useUser();
</script>

<template>
  <div class="pb-5">
    <div class="py-2 text-center">
      <div
        :class="`ic-holder ic-holder-lg d-flex align-items-center justify-content-center rounded-circle bg-${appDrawerContent.data.status} mx-auto mb-3`"
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
      <h6 class="mb-1">
        {{ $currency(appDrawerContent.data.amount, "NGN") }}
      </h6>
      <p class="caption">
        {{ appDrawerContent.data.narration || appDrawerContent.data.comment }}
      </p>
    </div>
    <div class="list-group rounded-4 py-2 bg-white mb-4">
      <div v-for="(item, index) in appDrawerContent.data" :key="index">
        <div class="list-group-item border-0" v-if="typeof item === 'string'">
          <h6 class="caption text-capitalize mb-1">{{ index }}</h6>
          <p :class="`title text-${item} mb-0`">{{ item }}</p>
        </div>
      </div>
    </div>
    <div class="btn-group gap-3 w-100 mb-4">
      <button
        type="button"
        class="btn btn-success btn-lg rounded-4"
        v-if="
          appDrawerContent.data.rate &&
          ['Pending'].includes(appDrawerContent.data.status) &&
          appDrawerContent.data.invoice
        "
        @click="$copy(appDrawerContent.data.invoice.address)"
      >
        Copy {{ appDrawerContent.data.invoice.short }} address
      </button>
      <button type="button" class="btn btn-primary btn-lg rounded-4">
        Share Receipt
      </button>
    </div>
    <div
      class="btn-group gap-3 w-100"
      v-if="user.isAdmin && ['Pending'].includes(appDrawerContent.data.status)"
    >
      <button
        type="button"
        class="btn btn-success rounded-4 btn-lg rounded lh-lg"
        @click="
          useOrder().update({
            id: appDrawerContent.data.id,
            status: 'Approved',
          })
        "
      >
        Approve
      </button>
      <button
        type="button"
        class="btn btn-danger rounded-4 btn-lg rounded lh-lg"
        @click="
          useOrder().update({
            id: appDrawerContent.data.id,
            status: 'Rejected',
          })
        "
      >
        Reject
      </button>
    </div>
  </div>
</template>

<style scoped></style>
