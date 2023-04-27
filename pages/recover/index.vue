<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});

const loginForm = {
  email: null,
  passphrase: null,
};
</script>

<template>
  <div class="auth h-100">
    <Appbar :hasPrev="true" class="bg-transparent fixed-top" />
    <div class="container-fluid py-5 h-100">
      <div class="container h-100">
        <div class="row align-items-center justify-content-center h-100">
          <div class="col-lg-4">
            <form
              @submit.prevent="useAuth().recover(loginForm)"
              class="row g-3"
            >
              <div class="col-lg-12">
                <h3>Account recovery</h3>
                <p>
                  Your 12 word Secret Private Key Recovery Phrase grants access
                  to your account. Please input it in the order specified.
                </p>
              </div>
              <div class="col-lg-12">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  v-model="loginForm.email"
                  required
                />
              </div>
              <div class="col-lg-12">
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
                    class="form-control"
                    placeholder="Passphrase"
                    v-model="loginForm.passphrase"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <NuxtLink to="/login">Remembered password?</NuxtLink>
              </div>
              <div class="col-lg-12">
                <button type="submit" class="btn btn-warning w-100">
                  Continue
                </button>
              </div>
              <div class="col-lg-12 text-center py-3">
                <small
                  >Trouble Logging In?
                  <a href="mailto:support@ablxtrade.com"
                    >Contact Support</a
                  ></small
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
