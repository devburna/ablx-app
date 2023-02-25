<script lang="ts" setup>
definePageMeta({});

const loginForm = {
  email: null,
  password: null,
};
</script>

<template>
  <div class="container-fluid py-5 h-100">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-lg-4">
          <form @submit.prevent="useAuth().login(loginForm)" class="row g-3">
            <div class="col-lg-12">
              <h3>Login</h3>
              <p>Sign in to your abbeylinko account</p>
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
                  :type="useIsHidden().value ? 'password' : 'text'"
                  class="form-control"
                  placeholder="Password"
                  v-model="loginForm.password"
                  required
                />
              </div>
            </div>
            <div class="col-lg-12">
              <NuxtLink to="/recover">Need help?</NuxtLink>
            </div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-primary w-100">
                Continue
              </button>
            </div>
            <div class="col-lg-12 text-center py-3">
              <small
                >Don't have an account?
                <NuxtLink to="/register">Create an account</NuxtLink></small
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
