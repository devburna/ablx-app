<script lang="ts" setup>
definePageMeta({
  middleware: "authenticated",
});

const features = [
  {
    img: "",
    title: "Trade in your Bitcoin",
    caption:
      "The Ablxtrade is built and tailored to serve and fully satisfy you.",
  },
  {
    img: "",
    title: "Trade in your Gift Cards",
    caption: "Trade your gift cards with Ablxtrade at amazing rates.",
  },
  {
    img: "",
    title: "Start Trading",
    caption: "We are online 24/7 and ready to do business with you.",
  },
];

const defaultFeature = ref(features[0]);
</script>

<template>
  <div class="h-100">
    <div
      :class="`container-fluid text-center bg-pattern h-100 ${
        item.title === defaultFeature.title ? 'd-block' : 'd-none'
      }`"
      v-for="(item, index) in features"
      :key="index"
      id="overview"
    >
      <div class="container py-5 h-100">
        <div class="row g-3 align-items-center justify-content-center h-100">
          <div class="col-lg-5">
            <img
              src="@/assets/icon.png"
              alt="logo"
              loading="lazy"
              class="img-fluid"
            />
          </div>
          <div></div>
          <div class="col-lg-5">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <div
                class="indicator d-flex align-items-center justify-content-center bg-white"
                @click="defaultFeature = features[count]"
                v-for="(item, count) in features.length"
                :key="count"
              >
                <div
                  :class="`indicator-inner bg-${
                    index == count ? 'primary' : 'warning'
                  }`"
                ></div>
              </div>
            </div>
          </div>
          <div></div>
          <div class="col-lg-5">
            <h4 class="text-white mb-3">{{ item.title }}</h4>
            <p class="text-white">
              {{ item.caption }}
            </p>
          </div>
          <div></div>
          <div class="col-lg-5">
            <button
              type="button"
              class="btn btn-warning btn-lg w-100"
              @click="defaultFeature = features[index + 1]"
              v-if="index !== features.length - 1"
            >
              Next
            </button>
            <div v-else>
              <button
                type="button"
                class="btn btn-warning btn-lg w-100 mb-3"
                @click="$router.push('/login')"
              >
                Login
              </button>
              <button
                type="button"
                class="btn btn-outline-light btn-lg w-100"
                @click="$router.push('/register')"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.indicator,
.indicator-inner {
  border-radius: 50%;
}

.indicator {
  width: 10px;
  height: 10px;
}

.indicator-inner {
  width: 6px;
  height: 6px;
}
</style>
