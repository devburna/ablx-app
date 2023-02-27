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
        <div class="modal-header">
          <div class="modal-title fs-5">
            <h5 class="mb-1 fw-bold" :id="`${appModal.content}Label`">
              {{ appModal.title }}
            </h5>
            <p class="mb-0 caption text-muted">{{ appModal.caption }}</p>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row justify-content-center">
            <div class="col-lg-5"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
