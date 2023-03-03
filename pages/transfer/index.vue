<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

useTransfer().banks({
  country: "NG",
});

const banks = useBanks();

const transferForm = ref({
  bank: "",
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
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar :title="true" :hasPrev="true" class="bg-primary sticky-top" />
    <div class="container-fluid py-3" id="transfer">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5">
            <div v-if="!response">
              <form
                @submit.prevent="preview = !preview"
                class="row g-3"
                v-if="!preview"
              >
                <div class="col-lg-12">
                  <select
                    id="bank"
                    class="form-select"
                    v-model="transferForm.bank"
                    required
                  >
                    <option value="" selected>Bank</option>
                    <option
                      v-for="(item, index) in banks"
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
              <div v-else>
                <div class="text-center py-3">
                  <div
                    class="ic-holder d-flex align-items-center justify-content-center rounded-circle bg-success mx-auto mb-3"
                  >
                    <div
                      class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-white"
                    >
                      <i class="bi bi-send-fill text-success icon"></i>
                    </div>
                  </div>
                  <h6 class="mb-1">
                    {{ transferForm.account_name }}
                  </h6>
                  <p class="caption">
                    <span>{{ transferForm.bank.name }}</span>
                    <i class="bi bi-dot"></i>
                    <span>{{ transferForm.account_number }}</span>
                  </p>
                </div>
                <div class="list-group rounded-4 py-1 bg-white mb-4">
                  <div
                    class="list-group-item d-flex align-items-center justify-content-between border-0"
                  >
                    <h6 class="caption text-capitalize mb-1">You Pay</h6>
                    <p class="title text-dark mb-0">
                      {{ transferForm.amount }}
                    </p>
                  </div>
                  <div
                    class="list-group-item d-flex align-items-center justify-content-between border-0"
                  >
                    <h6 class="caption text-capitalize mb-1">Fees</h6>
                    <p class="title text-dark mb-0">0</p>
                  </div>
                  <div
                    class="list-group-item d-flex align-items-center justify-content-between border-0"
                  >
                    <h6 class="caption text-capitalize mb-1">Receipent Gets</h6>
                    <p class="title text-dark mb-0">
                      {{ transferForm.amount }}
                    </p>
                  </div>
                  <div
                    class="list-group-item d-flex align-items-center justify-content-between border-0"
                  >
                    <h6 class="caption text-capitalize mb-1">Arriving</h6>
                    <p class="title text-dark mb-0">In a few minutes</p>
                  </div>
                </div>
                <button
                  type="button"
                  @click="useTransfer().create(transferForm)"
                  class="btn btn-primary btn-lg w-100"
                >
                  Confirm
                </button>
              </div>
            </div>
            <div class="text-center p-5" v-else>
              <h6 class="">Sent!</h6>
              <p class="caption" v-html="response.message"></p>
              <div class="btn-group gap-3 my-3">
                <button
                  type="button"
                  class="btn btn-primary btn-sm rounded-4 lh-lg px-4"
                  @click="response = null"
                >
                  Send again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
