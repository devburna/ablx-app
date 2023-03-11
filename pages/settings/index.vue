<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});

const settings = useUser();

const options = [
  {
    icon: "chat-dots-fill",
    title: "Help Center",
    caption: "Have an issue? Speak to our team",
    route: "/help",
  },
  {
    icon: "gift-fill",
    title: "Refer & Earn",
    caption: "Invite your friends and get a bonus",
    route: "/earn",
  },
  {
    icon: "lock-fill",
    title: "Update Password",
    caption: null,
    route: "/settings/password",
  },
];
</script>

<template>
  <div class="bg-light h-100">
    <Appbar :title="true" class="bg-primary sticky-top" />
    <div class="container-fluid py-4" id="settings">
      <div class="row g-4 align-items-center justify-content-center">
        <div class="col-lg-5 text-center">
          <div class="p-2">
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
        </div>
        <div class="col-lg-5">
          <div class="list-group rounded-4 py-1 bg-white">
            <ListView
              :icon="item.icon"
              :title="item.title"
              :caption="item.caption"
              :route="true"
              icHolder="primary"
              icHolderInner="warning"
              icHolderInnerIcon="primary"
              :to="item.route"
              v-for="(item, index) in options"
              :key="index"
              @click="$router.push(item.route)"
            />
            <ListView
              icon="person-fill-gear"
              title="Admin Console"
              caption="Manage assets, trades, users etc"
              @click="$router.push('/console')"
              icHolder="primary"
              icHolderInner="warning"
              icHolderInnerIcon="primary"
              v-if="settings?.isAdmin"
            />
            <ListView
              icon="door-closed-fill"
              title="Logout"
              :route="true"
              icHolder="primary"
              icHolderInner="warning"
              icHolderInnerIcon="primary"
              @click="useAuth().logout()"
            />
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

.title {
  font-weight: 500;
}
</style>
