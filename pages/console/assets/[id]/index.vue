<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

const route = useRoute();

const asset = ref();

const { data } = await useAssets().asset(route.params.id);
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      :name="data.data?.name"
    />
    <div class="container-fluid py-3" id="assets">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-5">
          <div class="list-group" v-if="data">
            <div
              class="list-group-item"
              v-for="(item, index) in data.data.rates"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>