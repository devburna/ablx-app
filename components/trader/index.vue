<script lang="ts" setup>
const { data } = await useAssets().list();
</script>

<template>
  <div class="container-fluid p-0" id="trade">
    <div class="bg-primary sticky-top">
      <nav v-if="typeof data.data === 'object'">
        <div class="nav nav-tabs border-light py-2" id="nav-tab" role="tablist">
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
            v-for="(item, index) in data.data"
            :key="index"
          >
            {{ index }}
          </button>
        </div>
      </nav>
    </div>
    <div class="row g-0 align-items-center justify-content-center">
      <div class="col-lg-5">
        <div v-if="typeof data.data === 'object'">
          <div v-for="(item, index) in data.data" :key="index">
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
                <div class="list-group rounded-4 m-3">
                  <div
                    class="list-group-item border-0 border-bottom border-light"
                    v-for="(asset, indexx) in item"
                    :key="indexx"
                    data-bs-toggle="offcanvas"
                    :data-bs-target="`#trade-${index}-${indexx}`"
                  >
                    <div class="card border-0">
                      <div class="row align-items-center g-0">
                        <div class="col-auto">
                          <img
                            :src="`${asset.image_url}`"
                            class="img-fluid rounded ic-holder-lg"
                            :alt="`${asset.name}`"
                            loading="eager"
                          />
                        </div>
                        <div class="col">
                          <div class="card-body">
                            <h5 class="card-title title mb-0">
                              {{ asset.name }}
                            </h5>
                          </div>
                        </div>
                        <div class="col-auto ms-auto">
                          <i class="bi bi-chevron-right caption"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Message caption="No asset found 😥" v-else />
      </div>
    </div>
    <BottomNav />
    <div v-if="data">
      <div v-for="(item, index) in data.data" :key="index">
        <div v-if="item">
          <AppDrawer
            v-for="(asset, indexx) in item"
            :key="indexx"
            :uuid="indexx"
            :content="`trade-${index}-${indexx}`"
            :data="asset"
            :title="asset.name"
            :caption="asset.comment || asset.type"
            dialog="offcanvas-bottom h-75"
            backdrop="n"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-group-item:last-of-type {
  border-bottom: 0 !important;
}
.img-fluid {
  fill-opacity: fill;
}
.nav-tabs .nav-link.active {
  font-weight: 600 !important;
}

.nav-tabs .nav-link:hover{
  color: var(--bs-warning);
}
</style>
