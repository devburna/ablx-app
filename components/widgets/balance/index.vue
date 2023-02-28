<script lang="ts" setup>
const userBalance = useUser();
</script>

<template>
  <div class="container-fluid bg-pattern py-5" id="balance">
    <div class="container mb-5">
      <div
        class="row g-1 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-12">
          <strong class="balance text-white">
            {{ userBalance?.wallet.balance }}
          </strong>
        </div>
        <div class="col-lg-12 mb-3">
          <small class="caption d-block"
            >Available balance ({{ userBalance?.wallet.currency }})</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.balance {
  font-size: 40px;
}
</style>
