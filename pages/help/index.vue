<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
const options = [
  {
    icon: "chat-dots-fill",
    title: "Help Center",
    caption: "Have an issue? Speak to our team",
    route: "/help",
  },
];
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar
      :title="true"
      :hasPrev="true"
      class="bg-primary sticky-top"
      name="Help Centre"
    />
    <div class="container-fluid py-3" id="trade">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-5">
          <div class="list-group rounded-4 py-1 bg-white">
            <ListView
              :icon="item.icon"
              :title="item.title"
              :caption="item.caption"
              :route="true"
              icHolder="light"
              :to="item.route"
              v-for="(item, index) in options"
              :key="index"
              @click="$router.push(item.route)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
