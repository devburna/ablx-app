<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const { data: banks } = await useTransfer().banks({
  country: "NG",
});

const transferForm = ref({
  bank: {},
  currency: "NGN",
  account_name: null,
  account_number: null,
  amount: null,
});

const preview = ref(false);
const response = ref();

const setAccountName = async (payload: any) => {
  const { data } = await useTransfer().validate({
    account_number: payload.account_number,
    account_bank: payload.bank.code,
  });

  if (data.value) {
    transferForm.value.account_name = data.value.data.account_name;
  }
};

const transferHandler = async (payload: object) => {
  const { data, error } = await useTransfer().create(payload);

  response.value = data.value || error.value;
};
</script>

<template>
  <div class="container-fluid p-0" id="transfer">
    <div class="row g-0 justify-content-center">
      <div class="col-lg-12 sticky-top">
        <Appbar :title="true" :hasPrev="true" class="bg-primary" />
      </div>
      <div class="col-lg-12">
        <div class="row" v-if="response">
          <div class="col-lg-5 text-center">
            <Message
              :title="`${response?.data?.status ? 'Sent' : 'Failed'}`"
              :caption="`${response?.data?.message}`"
            />
            <div class="btn-group gap-3">
              <button
                type="button"
                class="btn btn-primary btn-sm rounded-4 lh-lg px-4"
                @click="
                  response?.data?.status
                    ? (response = null)
                    : transferHandler(transferForm)
                "
              >
                {{ response?.data?.status ? "Send " : "Try " }}again
              </button>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-lg-5" v-if="!preview">
            <form
              @submit.prevent="preview = !preview"
              class="row g-3 justify-content-center p-3"
              v-if="banks"
            >
              <div class="col-lg-12">
                <input
                  type="text"
                  id="amount"
                  class="form-control"
                  placeholder="Enter Amount"
                  v-model="transferForm.amount"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  required
                />
              </div>
              <div class="col-lg-12">
                <select
                  id="bank"
                  class="form-select"
                  v-model="transferForm.bank"
                  required
                >
                  <option :value="{}" selected>Bank</option>
                  <option
                    v-for="(item, index) in banks.data"
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
                  id="account-number"
                  class="form-control"
                  placeholder="Account Number"
                  v-model="transferForm.account_number"
                />
              </div>
              <div class="col-lg-12">
                <input
                  type="text"
                  id="account-name"
                  class="form-control"
                  placeholder="Account Name"
                  required
                  readonly
                  v-model="transferForm.account_name"
                  @click="setAccountName(transferForm)"
                />
              </div>
              <div class="col-lg-12"></div>
              <div class="col-lg-12" v-if="transferForm.account_name">
                <button type="submit" class="btn btn-primary w-100">
                  Continue
                </button>
              </div>
            </form>
            <Message caption="Transfer not available, try again later" v-else />
          </div>
          <div class="col-lg-5 p-4" v-else>
            <ContentsDetails
              :title="`${$currency(
                transferForm.amount,
                transferForm.currency
              )}`"
              :caption="`${transferForm.account_name}`"
              :data="{
                amount: transferForm.amount,
                bank: transferForm.bank?.name,
                account_name: transferForm.account_name,
                account_number: transferForm.account_number,
                currency: transferForm.currency,
                minute: '5 minutes',
                recipient: transferForm.amount,
              }"
              icon="cloud-arrow-up"
              status="danger"
            />
            <button
              type="button"
              @click="transferHandler(transferForm)"
              class="btn btn-primary btn-lg w-100"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  font-size: 10px;
}
</style>
