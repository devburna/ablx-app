<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const settings = useUser();
</script>

<template>
  <div class="h-100 bg-light">
    <Appbar :title="true" />
    <div class="container-fluid h-100 py-3" id="settings">
      <div class="container p-1">
        <div class="row g-0 align-items-center justify-content-center">
          <div class="col-lg-5 text-center">
            <img
              src="https://i.pinimg.com/originals/09/26/3d/09263d5d8d9c10aa4cbc45c725485632.jpg"
              :alt="settings?.name"
              loading="lazy"
              class="avatar rounded-circle shadow-sm mb-3"
            />
            <p class="title text-capitalize mb-0">{{ settings?.name }}</p>
            <small class="d-block text-muted mb-3">{{ settings?.email }}</small>
            <button
              type="button"
              class="btn btn-success btn-sm"
              @click="$router.push('/settings/account-information')"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <BottomNav />
  </div>
</template>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
</style>
