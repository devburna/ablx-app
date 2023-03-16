<script lang="ts" setup>
const assetContent = useAttrs();

const tradeForm = ref({
  amount: null,
  type: "Sell",
  value: 0,
  rate: {},
  comment: null,
  receipt: null,
});

const setValue = (amount: number, rate: number) => {
  tradeForm.value.value = amount * rate;
};

const preview = ref(false);
const response = ref();

const tradeHandler = async () => {
  const { data } = await useOrder().create(tradeForm);
  if (data.value) {
    preview.value = !preview.value;
    response.value = data.value;
  }
};
</script>

<template>
  <div>
    <div v-if="!response">
      <div v-if="!preview">
        <form
          @submit.prevent="preview = !preview"
          class="row g-3"
          v-if="assetContent.data.rates.length"
        >
          <div class="col-lg-12">
            <select
              class="form-select"
              aria-label="Choose Rate"
              v-model="tradeForm.rate"
              required
            >
              <option selected :value="{}">Choose Rate</option>
              <option
                v-for="(item, index) in assetContent.data.rates"
                :key="index"
                :value="item"
              >
                {{ item.name }}
              </option>
            </select>
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
              <strong>{{ tradeForm.rate.buying_at || "000" }}</strong>
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
            <input
              type="file"
              class="form-control dropify dropify-receipt"
              id="upload"
              multiple
            />
          </div>
          <div class="col-lg-12">
            <span class="caption">Usually takes 5 minutes ⚡️ </span>
          </div>
          <div class="col-lg-12">
            <button type="submit" class="btn btn-primary w-100">
              Start Trade
            </button>
          </div>
        </form>
        <div class="text-center py-5" v-else>
          <span class="caption">No rates available for this trade 🥲</span>
        </div>
      </div>
      <div v-else>
        <div class="text-center mb-4">
          <img
            :src="assetContent.data.image.secure_url"
            :alt="assetContent.data.name"
            loading="lazy"
            class="ic-holder mb-3"
          />
          <h6 class="mb-1">
            {{
              Number(tradeForm.amount).toLocaleString("en-NG", {
                style: "currency",
                currency: "NGn",
              })
            }}
          </h6>
          <p class="caption">
            {{ tradeForm.rate.name }}
          </p>
        </div>
        <div class="list-group rounded-4 py-1 bg-white mb-4">
          <div v-for="(item, index) in tradeForm" :key="index">
            <div
              class="list-group-item border-0"
              v-if="typeof item === 'string'"
            >
              <h6 class="caption text-capitalize mb-1">{{ index }}</h6>
              <p class="title text-dark mb-0">{{ item }}</p>
            </div>
          </div>
          <div v-for="(item, index) in tradeForm.rate" :key="index">
            <div
              class="list-group-item border-0"
              v-if="typeof item === 'string'"
            >
              <h6 class="caption text-capitalize mb-1">{{ index }}</h6>
              <p class="title text-dark mb-0">{{ item }}</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          @click="tradeHandler"
          class="btn btn-primary btn-lg w-100 mb-3"
        >
          Complete Trade
        </button>
        <button
          type="button"
          @click="preview = !preview"
          class="btn btn-link text-muted btn-lg w-100"
        >
          Go Back
        </button>
      </div>
    </div>
    <div class="text-center py-5" v-else>
      <h6 class="">Congratulations!</h6>
      <p class="caption" v-html="response.data.comment || response.message"></p>
      <div
        class="py-3"
        v-if="response.data.invoice && response.data.invoice.address"
      >
        <qrcode-vue
          :value="response.data.invoice.address"
          :size="150"
          level="H"
          class="rounded"
        />
      </div>
      <div class="btn-group gap-3 my-3">
        <button
          type="button"
          class="btn btn-success btn-sm rounded lh-lg px-4"
          @click="$copy(response.data.invoice.address)"
          v-if="response.data.invoice && response.data.invoice.address"
        >
          Copy address
        </button>
        <button
          type="button"
          class="btn btn-primary btn-sm rounded lh-lg px-4"
          @click="response = null"
        >
          Trade again
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
