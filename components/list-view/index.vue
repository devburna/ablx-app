<script lang="ts" setup>
const listView = useAttrs();
</script>

<template>
  <div class="row">
    <div class="col-auto" v-if="listView.icon || listView.img">
      <img
        :src="`${listView.img}`"
        alt="image"
        class="ic-holder"
        loading="lazy"
        v-if="listView.img"
      />
      <div
        :class="`ic-holder ic-holder-lg rounded-circle bg-${listView.icHolder}`"
        v-else
      >
        <div
          :class="`ic-holder-inner rounded-circle bg-${listView.icHolderInner}`"
        >
          <i
            :class="`bi bi-${listView.icon} icon text-${listView.icHolderInnerIcon}`"
          ></i>
        </div>
      </div>
    </div>
    <div class="col-auto">
      <h6 class="title mb-0">{{ listView.title }}</h6>
      <small class="caption text-muted" v-if="listView.caption">
        {{ listView.caption }}
      </small>
    </div>
    <div class="col-auto" v-if="listView.route">
      <i class="bi bi-chevron-right caption"></i>
    </div>
    <div
      class="col-auto text-end"
      v-if="listView.trailing || listView.subTrailing"
    >
      <h6 class="title mb-0" v-if="listView.trailing">
        {{ listView.trailing }}
      </h6>
      <small
        :class="`caption text-${listView.status}muted`"
        v-if="listView.subTrailing"
      >
        {{ listView.subTrailing }}
      </small>
    </div>
  </div>
</template>

<style scoped></style>
