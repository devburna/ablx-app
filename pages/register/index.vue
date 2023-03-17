<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});

const registerForm = {
  name: null,
  email: null,
  password: null,
};
</script>

<template>
  <div class="auth h-100">
    <Appbar :hasPrev="true" :title="false" class="bg-transparent fixed-top" />
    <div class="container-fluid py-5 h-100">
      <div class="container h-100">
        <div class="row align-items-center justify-content-center h-100">
          <div class="col-lg-4">
            <form
              @submit.prevent="useAuth().register(registerForm)"
              class="row g-3"
            >
              <div class="col-lg-12">
                <h3>Create an account</h3>
                <p>Sign in to your abbeylinko account</p>
              </div>
              <div class="col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your name"
                  v-model="registerForm.name"
                  required
                />
              </div>
              <div class="col-lg-12">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  v-model="registerForm.email"
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
                    placeholder="Password"
                    v-model="registerForm.password"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-12"></div>
              <div class="col-lg-12">
                <button type="submit" class="btn btn-warning w-100">
                  Continue
                </button>
              </div>
              <div class="col-lg-12 text-center py-3">
                <small
                  >Already have an account?
                  <NuxtLink to="/">Login</NuxtLink></small
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
