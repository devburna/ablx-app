<script lang="ts" setup>
const appDrawerContent = useAttrs();
const user = useUser();
</script>

<template>
  <div class="pb-5">
    <ContentsDetails
      :title="`${$currency(
        appDrawerContent.data.amount,
        appDrawerContent.data.currency || appDrawerContent.data.rate.currency
      )}`"
      :caption="`${
        appDrawerContent.data.narration || appDrawerContent.data.comment
      }`"
      :data="appDrawerContent.data"
    />
    <div class="dropup">
      <button
        type="button"
        class="btn btn-primary btn-lg rounded-4 w-100 mb-4"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More Actions
      </button>
      <ul class="dropdown-menu border-0 title shadow-sm lh-lg w-100 mb-3">
        <li
          v-if="
            ['Pending'].includes(appDrawerContent.data.status) &&
            appDrawerContent.data?.rate &&
            user.isAdmin
          "
        >
          <a
            class="dropdown-item bg-transparent text-success"
            href="#"
            @click="
              useOrders().update({
                id: appDrawerContent.data.id,
                status: 'Confirmed',
              })
            "
            >Approve</a
          >
        </li>
        <li
          v-if="
            ['New'].includes(appDrawerContent.data.status) &&
            appDrawerContent.data?.rate &&
            appDrawerContent.data?.invoice &&
            appDrawerContent.data?.invoice.address
          "
        >
          <a
            class="dropdown-item bg-transparent text-muted"
            href="#"
            @click="$copy(appDrawerContent.data?.invoice.address)"
            >Copy address</a
          >
        </li>
        <li>
          <a class="dropdown-item bg-transparent text-muted" href="#"
            >Share receipt</a
          >
        </li>
        <li
          v-if="
            ['Pending'].includes(appDrawerContent.data.status) &&
            appDrawerContent.data?.rate &&
            user.isAdmin
          "
        >
          <hr class="dropdown-divider border-light" />
        </li>
        <li
          v-if="
            ['Pending'].includes(appDrawerContent.data.status) &&
            appDrawerContent.data?.rate &&
            user.isAdmin
          "
        >
          <a
            class="dropdown-item bg-transparent text-danger"
            href="#"
            @click="
              useOrders().update({
                id: appDrawerContent.data.id,
                status: 'Failed',
              })
            "
            >Reject</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list-group-item:last-of-type {
  border-bottom: 0 !important;
}
</style>
