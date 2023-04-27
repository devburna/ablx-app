<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const account = useUser();

const accountForm = {
  name: account?.value?.name,
  email: account?.value?.email,
};
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      name="Account Information"
    />
    <div class="container-fluid h-100 p-3" id="account">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-5">
          <form
            @submit.prevent="useAccount().profile(accountForm)"
            class="row g-3 py-1"
          >
            <div class="col-lg-12">
              
              <input
                type="text"
                id="name"
                class="form-control"
                :placeholder="account?.name"
                v-model="accountForm.name"
                required
              />
            </div>
            <div class="col-lg-12">
              
              <input
                type="email"
                id="email"
                class="form-control"
                :placeholder="account?.email"
                v-model="accountForm.email"
                required
              />
            </div>
            <div class="col-lg-12"></div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-primary w-100">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
