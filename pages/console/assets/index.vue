<script lang="ts" setup>
definePageMeta({
  middleware: ["is-logged-in", "is-admin"],
});

useTrader().assets();
const trade = useTrade();
</script>

<template>
  <div class="h-100 bg-light">
    <div class="sticky-top bg-primary">
      <Appbar :title="true" :hasPrev="true" name="Assets" />
      <nav v-if="typeof trade === 'object'">
        <div
          class="nav nav-tabs border-top border-light lh-lg"
          id="nav-tab"
          role="tablist"
        >
          <button
            :class="`nav-link rounded-0 border-0 border-light w-50 ${
              index.toString() === 'Giftcard' ? 'active' : ''
            }`"
            :id="`nav-${index}-tab`"
            data-bs-toggle="tab"
            :data-bs-target="`#nav-${index}`"
            type="button"
            role="tab"
            :aria-controls="`nav-${index}`"
            :aria-selected="index.toString() === 'Giftcard' ? true : false"
            v-for="(item, index) in trade"
            :key="index"
          >
            {{ index }}
          </button>
        </div>
      </nav>
    </div>
    <div class="container-fluid py-3" id="trade">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-5">
          <div v-if="typeof trade === 'object'">
            <div v-for="(item, index) in trade" :key="index">
              <div class="tab-content" id="nav-tabContent">
                <div
                  :class="`tab-pane fade  ${
                    index.toString() === 'Giftcard' ? 'show active' : ''
                  }`"
                  :id="`nav-${index}`"
                  role="tabpanel"
                  :aria-labelledby="`nav-${index}-tab`"
                  tabindex="0"
                >
                  <div class="row g-3">
                    <div
                      class="col-3 col-lg-3"
                      v-for="(asset, indexx) in item"
                      :key="indexx"
                    >
                      <NuxtLink
                        :to="`/console/assets/${asset.id}`"
                        class="card border-light text-center"
                      >
                        <div class="card-body">
                          <img
                            :src="asset.image.secure_url"
                            :alt="asset.name"
                            loading="lazy"
                            class="ic-holder"
                          />
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Message caption="No asset found 😥" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
