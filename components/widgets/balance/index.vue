<script lang="ts" setup>
const userBalance = useUser();
</script>

<template>
  <div class="container-fluid bg-pattern py-5" id="balance">
    <div class="container pt-3 pb-4">
      <div
        class="row g-0 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-12">
          <strong class="balance text-white">
            {{
              Number(userBalance.wallet.balance).toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })
            }}
          </strong>
        </div>
        <div class="col-lg-12 mb-5">
          <small class="caption d-block">Available balance</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.balance {
  font-size: 35px;
}
</style>
