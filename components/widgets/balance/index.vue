<script lang="ts" setup>
const quickActions = [
  {
    icon: "lightning-charge",
    name: "Rates",
    route: "/explore",
  },
  {
    icon: "bar-chart",
    name: "Orders",
    route: "/orders",
  },
  {
    icon: "send",
    name: "Transfer",
    route: "/transfer",
  },
];
</script>

<template>
  <div class="container-fluid bg-pattern py-5" id="balance">
    <div class="container py-5">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-5 text-center">
          <div class="mb-3">
            <small class="caption d-block mb-1">Available balance</small>
            <strong class="balance text-white"> ₦5,000.00 </strong>
          </div>
          <hr class="mb-3 border-white" />
          <div class="row align-items-center justify-content-center">
            <div
              class="col-auto"
              v-for="(item, index) in quickActions"
              :key="index"
            >
              <button
                class="btn btn-link btn-sm d-flex align-items-center text-white gap-2 lh-lg"
                @click="$router.push(item.route)"
              >
                <div
                  class="ic-holder d-flex align-items-center justify-content-center rounded-circle bg-white"
                >
                  <i :class="`bi bi-${item.icon}-fill text-primary icon`"></i>
                </div>
                {{ item.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.balance {
  font-size: 40px;
}

.balance small {
  font-weight: 500;
}

.ic-holder {
  width: 24px;
  height: 24px;
}

.ic-holder .icon {
  font-size: 12px;
}

.caption {
  color: rgba(255, 255, 255, 0.5);
}
</style>
