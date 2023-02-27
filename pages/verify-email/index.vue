<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
  validate: async () => {
    await useAccount().me();
    const user = useUser();

    if (user.value.email_verified_at) {
      return false;
    }
    return true;
  },
});

const verifyEmailForm = {
  code: null,
};
</script>

<template>
  <div class="container-fluid py-5 h-100">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-lg-4">
          <form
            @submit.prevent="
              useAuth().verifyEmailVerificationCode(verifyEmailForm)
            "
            class="row g-3"
          >
            <div class="col-lg-12">
              <h3>Veriy email</h3>
              <p>Please verify your email to proceed</p>
            </div>
            <div class="col-lg-12">
              <input
                type="text"
                class="form-control"
                placeholder="6 digits code"
                maxlength="6"
                v-model="verifyEmailForm.code"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                required
              />
            </div>
            <div class="col-lg-12"></div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-warning w-100">
                Continue
              </button>
            </div>
            <div class="col-lg-12 text-center py-3">
              <small
                >Didn't receive code?
                <a
                  href="javascript:;"
                  @click="useAuth().emailVerificationRequest()"
                  >Resend</a
                ></small
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
