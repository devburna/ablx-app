<script lang="ts" setup>
definePageMeta({
  middleware: "is-logged-in",
});
useTrader().assets();
const trade = useTrade();
</script>

<template>
  <div class="h-100 bg-light">
    <div class="sticky-top bg-primary">
      <Appbar :title="true" caption="What do you want to trade?" />
      <nav v-if="typeof trade === 'object'">
        <div
          class="nav nav-tabs border-top border-light lh-lg"
          id="nav-tab"
          role="tablist"
        >
          <button
            :class="`nav-link border-0 border-light w-50 ${
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
                      <div
                        class="card border-light text-center"
                        data-bs-toggle="offcanvas"
                        :data-bs-target="`#trade-${index}-${indexx}`"
                      >
                        <div class="card-body">
                          <img
                            :src="asset.image.secure_url"
                            :alt="asset.name"
                            loading="lazy"
                            class="ic-holder"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Message caption="No trade available at the moment ????" v-else />
        </div>
      </div>
    </div>
    <BottomNav />
    <div v-if="trade">
      <div v-for="(item, index) in trade" :key="index">
        <div v-if="item">
          <AppDrawer
            v-for="(asset, indexx) in item"
            :key="indexx"
            :uuid="indexx"
            :content="`trade-${index}-${indexx}`"
            :data="asset"
            :title="asset.name"
            :caption="asset.type"
            dialog="offcanvas-bottom h-75"
            backdrop="n"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  border: 0;
  font-size: 14px;
  border-radius: 0;
  background-color: transparent !important;
  color: aliceblue;
}

.nav-link:first-of-type {
  border-right: 1px solid var(--border-light) !important;
}

.nav-tabs .nav-link.active {
  color: var(--bs-warning);
}
</style>
