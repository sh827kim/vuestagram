<template>
  <div>
    <div v-if="tabNo == 0">
      <Post v-for="post in posts" :key="post" :post="post" />
    </div>
    <div v-if="tabNo == 1">
      <div
        :class="selectedFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImageURL})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :uploadImageURL="uploadImageURL"
          v-for="filter in filters"
          :key="filter"
          :filter="filter"
        >
          <template v-slot:filter> {{ filter }} </template>
        </FilterBox>
      </div>
    </div>
    <div v-if="tabNo == 2">
      <!-- 글작성페이지 -->
      <div
        :class="selectedFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImageURL})` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('changeContent', $event.target.value)"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  components: {
    Post,
    FilterBox,
  },
  props: {
    posts: Array,
    tabNo: Number,
    uploadImageURL: String,
  },

  data() {
    return {
      newContent: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      selectedFilter: "",
    };
  },
  mounted() {
    this.emitter.on("filter", (selectedFilter) => {
      this.selectedFilter = selectedFilter;
    });
  },
};
</script>
<style scoped></style>
