<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const { data: bills } = await useBills().list();

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
    <div class="container-fluid h-100 py-3" id="bills">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5">
            <form
              @submit.prevent="useBills().validate(billForm.type)"
              class="row g-3"
              v-if="bills"
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
                    v-for="(item, index) in bills.data"
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
                  v-on:keyup="billForm.type.customer = billForm.customer"
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
            <Message caption="No biller found, try again later" v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
