<script lang="ts" setup>
const assetContent = useAttrs();

const rate = ref(null);
</script>

<template>
  <form class="row g-3 py-2">
    <div class="col-lg-12">
      <div class="dropdown">
        <button
          class="btn btn-light border d-flex align-items-center justify-content-between dropdown-toggle w-100"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose rate
        </button>
        <ul
          class="dropdown-menu border-light rounded-4 w-100 lh-lg"
          v-if="assetContent.data.rates.length"
        >
          <li>
            <button
              type="button"
              class="dropdown-item bg-transparent"
              @click="rate = item"
              v-for="(item, index) in assetContent.data.rates"
              :key="index"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-12">
      <input
        type="text"
        class="form-control"
        placeholder="Enter Trade Amount"
        required
      />
    </div>
    <div class="col-lg-12">
      <input
        type="text"
        class="form-control"
        placeholder="Enter Trade Amount"
        required
      />
    </div>
    <div class="col-lg-12">
      <input
        type="text"
        class="form-control"
        placeholder="Optional e.g You can type your code here"
      />
    </div>
    <div class="col-lg-12">
      <input type="file" class="" />
    </div>
    <div class="col-lg-12"></div>
    <div class="col-lg-12">
      <button type="submit" class="btn btn-primary w-100">Start Trade</button>
    </div>
  </form>
</template>

<style scoped></style>
