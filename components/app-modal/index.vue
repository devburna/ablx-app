<script lang="ts" setup>
const appModal = useAttrs();
</script>

<template>
  <div
    class="modal fade"
    :id="`${appModal.content}`"
    tabindex="-1"
    :aria-labelledby="`${appModal.content}Label`"
    aria-hidden="true"
  >
    <div :class="`modal-dialog ${appModal.dialog}`">
      <div class="modal-content">
        <div class="modal-header border-light">
          <div class="modal-title">
            <h6 class="mb-1" :id="`${appModal.content}Label`">
              {{ appModal.title }}
            </h6>
            <p class="caption mb-0" v-if="appModal.caption">
              {{ appModal.caption }}
            </p>
          </div>
          <button
            type="button"
            class="btn btn-sm p-0 border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="bi bi-x-circle-fill"></i>
          </button>
        </div>
        <div class="modal-body py-0">
          <div class="row justify-content-center h-100">
            <div class="col-lg-5 h-100">
              <ContentsImagePreview
                v-if="
                  appModal.content === `trade-sample-upload-${appModal.content}`
                "
                :content="appModal.content"
                :data="appModal.data"
              />
            </div>
          </div>
        </div>
        <div
          class="modal-footer border-light"
          v-if="appModal.dismissBtn || appModal.submit"
        >
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
            v-if="appModal.dismissBtn"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-if="appModal.submit"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
