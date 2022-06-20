<template>
  <div
    :class="[filter]"
    class="filter-item"
    :style="`background-image:url(${uploadImageURL})`"
    @click="filterChanged"
  >
    <slot name="filter"></slot>
  </div>
</template>
<script>
export default {
  name: "FilterBox",
  props: {
    uploadImageURL: String,
    filter: String,
  },
  data() {
    return {};
  },
  methods: {
    fire() {
      this.emitter.emit("hi", "hello");
    },
    filterChanged() {
      this.emitter.emit("filter", this.filter);
    },
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
