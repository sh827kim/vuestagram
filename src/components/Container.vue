<template>
  <div>
    <div v-if="tabNo == 0">
      <Post v-for="post in posts" :key="post" :post="post" />
    </div>
    <div v-if="tabNo == 1">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImageURL})` }"
      ></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>
    <div v-if="tabNo == 2">
      <!-- 글작성페이지 -->
      <div
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

export default {
  components: {
    Post,
  },
  props: {
    posts: Array,
    tabNo: Number,
    uploadImageURL: String,
  },
  data() {
    return {
      newContent: "",
    };
  },
};
</script>
<style scoped></style>
