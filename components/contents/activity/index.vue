<script lang="ts" setup>
const appDrawerContent = useAttrs();
</script>

<template>
  <div class="pb-5">
    <div class="py-2 text-center">
      <div
        :class="`ic-holder d-flex align-items-center justify-content-center rounded-circle bg-${appDrawerContent.data.status} mx-auto mb-3`"
      >
        <div
          class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-white"
        >
          <i
            :class="`bi bi-${
              ['Order'].includes(appDrawerContent.data.channel) ? 'lightning' : 'send'
            }-fill text-${appDrawerContent.data.status} icon`"
          ></i>
        </div>
      </div>
      <h6 class="mb-1">
        {{ appDrawerContent.data.amount }}
      </h6>
      <p class="caption">
        {{ appDrawerContent.data.narration }}
      </p>
    </div>
    <div class="list-group rounded-4 py-1 bg-white mb-4">
      <div v-for="(item, index) in appDrawerContent.data" :key="index">
        <div class="list-group-item border-0" v-if="typeof item === 'string'">
          <h6 class="caption text-capitalize mb-1">{{ index }}</h6>
          <p class="title text-dark mb-0">{{ item }}</p>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-lg w-100">
      Share Receipt
    </button>
  </div>
</template>

<style scoped></style>
