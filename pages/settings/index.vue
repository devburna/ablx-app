<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const settings = useUser();

const options = [
  {
    icon: "chat-dots",
    title: "Help Center",
    caption: "Have an issue? Speak to our team",
    route: "/help",
  },
  {
    icon: "gift",
    title: "Refer & Earn",
    caption: "Invite your friends and get a bonus",
    route: "/earn",
  },
  {
    icon: "lock",
    title: "Update Password",
    caption: null,
    route: "/settings/password",
  },
];
</script>

<template>
  <div class="bg-light h-100">
    <Appbar :title="true" class="bg-primary sticky-top" />
    <div class="container-fluid py-3" id="settings">
      <div class="container p-1">
        <div class="row g-4 align-items-center justify-content-center">
          <div class="col-lg-5 text-center pt-2">
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
              class="btn btn-warning btn-sm rounded-pill px-3 text-white"
              @click="$router.push('/settings/account')"
            >
              Edit Profile
            </button>
          </div>
          <div class="col-lg-5 py-2">
            <div class="list-group rounded-4 gap-3">
              <NuxtLink
                :to="item.route"
                class="list-group-item rounded-4 py-2"
                v-for="(item, index) in options"
                :key="index"
              >
                <div
                  class="row row-cols-3 g-3 align-items-center justify-content-between py-1"
                >
                  <div class="col-auto">
                    <div
                      class="ic-holder d-flex align-items-center justify-content-center rounded-circle bg-light"
                    >
                      <i :class="`bi bi-${item.icon}-fill icon text-primary-dark`"></i>
                    </div>
                  </div>
                  <div class="col-auto me-auto">
                    <p class="title mb-0">{{ item.title }}</p>
                    <p class="caption mb-0 text-muted" v-if="item.caption">
                      {{ item.caption }}
                    </p>
                  </div>
                  <div class="col-auto text-end">
                    <i class="bi bi-chevron-right caption"></i>
                  </div>
                </div>
              </NuxtLink>
              <button
                type="button"
                class="list-group-item rounded-4 py-2"
                @click="useAuth().logout()"
              >
                <div
                  class="row row-cols-3 g-3 align-items-center justify-content-between py-1"
                >
                  <div class="col-auto">
                    <div
                      class="ic-holder d-flex align-items-center justify-content-center rounded-circle bg-light"
                    >
                      <i class="bi bi-door-closed-fill icon"></i>
                    </div>
                  </div>
                  <div class="col-auto me-auto">
                    <p class="title mb-0">Logout</p>
                  </div>
                  <div class="col-auto text-end">
                    <i class="bi bi-chevron-right caption"></i>
                  </div>
                </div>
              </button>
            </div>
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

.list-group {
  overflow: hidden;
}

.list-group-item {
  border: 0;
}

.ic-holder {
  width: 36px;
  height: 36px;
}

.icon {
  font-size: 15px;
}

.title {
  font-weight: 500;
}
</style>
