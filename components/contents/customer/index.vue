<script lang="ts" setup>
const appDrawerContent = useAttrs();

const user = useUser();
</script>

<template>
  <div class="pb-5">
    <div class="py-2 text-center">
      <div
        :class="`ic-holder ic-holder-xl d-flex align-items-center justify-content-center rounded-circle bg-primary mx-auto mb-3`"
      >
        <div
          class="ic-holder-inner d-flex align-items-center justify-content-center rounded-circle bg-warning"
        >
          <i :class="`bi bi-person-fill text-primary icon`"></i>
        </div>
      </div>
      <h6 class="fw-bold mb-1">
        {{ appDrawerContent.data.name }}
      </h6>
      <p class="caption">
        {{ appDrawerContent.data.email }}
      </p>
    </div>
    <div class="list-group rounded-4 py-1 mb-4 bg-white">
      <div class="list-group-item border-bottom border-light border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Username</span>
          </div>
          <div class="col-auto">
            <span>{{ appDrawerContent.data.name }}</span>
          </div>
        </div>
      </div>
      <div class="list-group-item border-bottom border-light border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Email</span>
          </div>
          <div class="col-auto">
            <span
              :class="`text-${
                appDrawerContent.data.email_verified_at ? '' : 'danger'
              }`"
              >{{ appDrawerContent.data.email }}</span
            >
          </div>
        </div>
      </div>
      <div class="list-group-item border-0 py-3">
        <div class="row g-2 justify-content-between caption">
          <div class="col-auto">
            <span class="text-secondary">Joined</span>
          </div>
          <div class="col-auto">
            <span>{{
              $timeAgo(new Date(appDrawerContent.data.created_at))
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
