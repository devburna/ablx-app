<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const passwordForm = {
  current_password: null,
  password: null,
  password_confirmation: null,
};
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar :title="true" :hasPrev="true" class="bg-primary sticky-top" name="Update Password" />
    <div class="container-fluid h-100 py-4" id="password">
      <div class="container py-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5">
            <form
              @submit.prevent="useAccount().password(passwordForm)"
              class="row g-3"
            >
              <div class="col-lg-12">
                <label for="current-password" class="mb-1"
                  >Current password</label
                >
                <div class="position-relative">
                  <button
                    type="button"
                    class="btn btn-link w-auto position-absolute end-0"
                    @click="useIsHidden().value = !useIsHidden().value"
                  >
                    <i
                      :class="`bi bi-${
                        useIsHidden().value ? 'eye' : 'eye-slash'
                      }-fill text-muted`"
                    ></i>
                  </button>
                  <input
                    :type="useIsHidden().value ? 'text' : 'password'"
                    id="current-password"
                    class="form-control"
                    placeholder=""
                    v-model="passwordForm.current_password"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <label for="password" class="mb-1">New password</label>
                <div class="position-relative">
                  <button
                    type="button"
                    class="btn btn-link w-auto position-absolute end-0"
                    @click="useIsHidden().value = !useIsHidden().value"
                  >
                    <i
                      :class="`bi bi-${
                        useIsHidden().value ? 'eye' : 'eye-slash'
                      }-fill text-muted`"
                    ></i>
                  </button>
                  <input
                    :type="useIsHidden().value ? 'text' : 'password'"
                    id="password"
                    class="form-control"
                    placeholder=""
                    v-model="passwordForm.password"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <label for="password-confirmation" class="mb-1"
                  >Retype password</label
                >
                <div class="position-relative">
                  <button
                    type="button"
                    class="btn btn-link w-auto position-absolute end-0"
                    @click="useIsHidden().value = !useIsHidden().value"
                  >
                    <i
                      :class="`bi bi-${
                        useIsHidden().value ? 'eye' : 'eye-slash'
                      }-fill text-muted`"
                    ></i>
                  </button>
                  <input
                    :type="useIsHidden().value ? 'text' : 'password'"
                    id="password-confirmation"
                    class="form-control"
                    placeholder=""
                    v-model="passwordForm.password_confirmation"
                    required
                  />
                </div>
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
  </div>
</template>

<style scoped></style>
