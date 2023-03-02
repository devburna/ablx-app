<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

useBill().all();

const bills = useBills();

const billForm = ref({
  type: {},
  amount: null,
  customer: null,
});
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      caption="Pay Local & International"
    />
    <div class="container-fluid py-4" id="trade">
      <div class="container p-0">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5">
            <form
              @submit.prevent="useBill().validate(billForm.type)"
              class="row g-3"
            >
              <div class="col-lg-12">
                <select
                  class="form-select"
                  aria-label="Select Bill Type"
                  v-model="billForm.type"
                  required
                >
                  <option selected :value="{}">Select Bill Type</option>
                  <option
                    v-for="(item, index) in bills"
                    :key="index"
                    :value="item"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-12" v-if="billForm.type.name">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Amount"
                  v-model="billForm.amount"
                  v-on:change="billForm.type.amount = billForm.amount"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  required
                />
              </div>
              <div class="col-lg-12" v-if="billForm.type.name">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="billForm.type.label_name"
                  v-model="billForm.customer"
                  v-on:change="billForm.type.customer = billForm.customer"
                  required
                />
              </div>
              <div class="col-lg-12"></div>
              <div class="col-lg-12" v-if="billForm.type.name">
                <button type="submit" class="btn btn-primary w-100">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
