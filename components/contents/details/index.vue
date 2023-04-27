<script lang="ts" setup>
const details = useAttrs();
const user = useUser();
</script>

<template>
  <div>
    <div class="pb-2 text-center">
      <img
        :src="
          details.data?.rate?.asset?.image_url || details.data?.data?.image_url
        "
        :alt="details.data?.rate?.asset?.name"
        loading="lazy"
        class="ic-holder ic-holder-xl mx-auto mb-3"
        v-if="details.data?.rate || details.data?.data?.image_url"
      />
      <div
        :class="`ic-holder ic-holder-xl d-flex align-items-center justify-content-center rounded-circle bg-${
          details.data?.status || details?.status || 'primary'
        } mx-auto mb-3`"
        v-else
      >
        <div
          class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-white"
        >
          <i
            :class="`bi bi-${
              ['Order'].includes(details.data?.channel)
                ? 'lightning'
                : details?.icon || 'bag-check'
            }-fill text-${
              details.data?.status || details?.status || 'primary'
            } icon`"
          ></i>
        </div>
      </div>
      <h6 class="fw-bold mb-1">
        {{ details?.title }}
      </h6>
      <p class="caption">
        {{ details?.caption }}
      </p>
    </div>
    <div class="list-group rounded-4 py-1 mb-4 bg-white">
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.name"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Username</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.name }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.email"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Email</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.email }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.reference"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Ref</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.reference }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.type"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Type</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.type }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.rate || details.data?.item"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Item</span>
          </div>
          <div class="col-auto">
            <span>{{
              details.data?.rate?.asset?.name || details.data?.data.name
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.rate"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Category</span>
          </div>
          <div class="col-auto">
            <span>{{
              details.data?.rate?.asset?.type || details.data?.data.type
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.amount"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Amount</span>
          </div>
          <div class="col-auto">
            <span>{{
              $currency(
                details.data?.amount,
                details.data?.currency || details.data?.rate?.currency
              )
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.bank"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Bank</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.bank }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.account_name"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Account name</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.account_name }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.account_number"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Account number</span>
          </div>
          <div class="col-auto">
            <span @click="$copy(details.data?.account_number)">
              {{ details.data?.account_number }}</span
            >
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.rate"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Rate</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.rate?.name }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.rate || details.data?.recipient"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Recipient gets</span>
          </div>
          <div class="col-auto">
            <span>{{
              $currency(
                details.data?.amount * details.data?.rate?.buying_at ||
                  details.data?.recipient,
                details.data?.currency || "NGN"
              )
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.rate || details.data?.comment"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Comment</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.comment || "---" }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.narration"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Narration</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.narration }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.channel"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Channel</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.channel }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="details.data?.status"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Status</span>
          </div>
          <div class="col-auto">
            <span :class="`text-${details.data?.status}`">{{
              details.data?.status
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="user.isAdmin && details.data?.user"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Username</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.user.name }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-bottom border-light border-0 py-3"
        v-if="user.isAdmin && details.data?.user"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Email</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.user.email }}</span>
          </div>
        </div>
      </div>
      <div
        class="list-group-item border-0 py-3"
        v-if="details.data?.created_at"
      >
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Created</span>
          </div>
          <div class="col-auto">
            <span>{{ $timeAgo(new Date(details.data?.created_at)) }}</span>
          </div>
        </div>
      </div>
      <div class="list-group-item border-0 py-3" v-if="details.data?.minute">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Arrives in</span>
          </div>
          <div class="col-auto">
            <span>{{ details.data?.minute }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
