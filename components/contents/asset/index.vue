<script lang="ts" setup>
const assetContent = useAttrs();

const tradeForm = ref({
  amount: null,
  value: 0,
  rate: {
    name: "Choose Rate",
    buying_at: 0,
  },
  comment: null,
  receipt: null,
});

const setValue = (amount: number, rate: number) => {
  tradeForm.value.value = amount * rate;
};
</script>

<template>
  <div>
    <form class="row g-3 py-2" v-if="assetContent.data.rates.length">
      <div class="col-lg-12">
        <div class="dropdown">
          <button
            class="form-control d-flex align-items-center justify-content-between dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ tradeForm.rate.name }}
          </button>
          <ul
            class="dropdown-menu border-light rounded-4 w-100 lh-lg"
            v-if="assetContent.data.rates.length"
          >
            <li>
              <button
                type="button"
                class="dropdown-item bg-transparent text-muted"
                @click="
                  tradeForm.rate = item;
                  setValue(tradeForm.amount, tradeForm.rate.buying_at);
                "
                v-for="(item, index) in assetContent.data.rates"
                :key="index"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-12">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Trade Amount"
          v-model="tradeForm.amount"
          v-on:keyup="setValue(tradeForm.amount, tradeForm.rate.buying_at)"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          required
        />
      </div>
      <div class="col-lg-12">
        <div
          class="form-control d-flex align-items-center justify-content-between text-primary bg-info-soft border-info"
        >
          <strong class="fs-6">{{
            (tradeForm.value || 0).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })
          }}</strong>
          <strong>{{ tradeForm.rate.buying_at }}</strong>
        </div>
      </div>
      <div
        class="col-lg-12"
        v-if="['Giftcard'].includes(assetContent.data.type)"
      >
        <textarea
          type="text"
          class="form-control pt-2"
          rows="3"
          placeholder="Optional Comment e.g You can type your code here"
          v-model="tradeForm.comment"
        />
      </div>
      <div
        class="col-lg-12"
        v-if="['Giftcard'].includes(assetContent.data.type)"
      >
        <input type="file" class="form-control" id="upload" multiple />
      </div>
      <div class="col-lg-12">
        <span class="caption">Usually takes 5 minutes ⚡️ </span>
      </div>
      <div class="col-lg-12"></div>
      <div class="col-lg-12">
        <button type="submit" class="btn btn-primary w-100">Start Trade</button>
      </div>
    </form>
    <div class="text-center py-5" v-else>
      <span class="caption">No rates available for this trade 🥲</span>
    </div>
  </div>
</template>

<style scoped></style>
