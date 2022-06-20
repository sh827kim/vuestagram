<template>
  <div class="header">
    <ul class="header-button-left" @click="cancel" v-if="tabNo != 0">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right" @click="next" v-if="tabNo == 1">
      <li>Next</li>
    </ul>
    <ul class="header-button-right" @click="publish" v-if="tabNo == 2">
      <li>Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <!--
  <h4>Hi, {{ $store.state.name }}, {{ $store.state.age }}</h4>
  <button @click="$store.commit('addAge', 10)">button</button>
-->
  <Container
    :posts="posts"
    :tabNo="tabNo"
    :uploadImageURL="uploadImageURL"
    @changeContent="changeContent($event)"
  />
  <button @click="getMore">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>
<script>
import Container from "./components/Container.vue";
import posts from "./assets/data.js";
import axios from "axios";

export default {
  components: {
    Container,
  },

  data() {
    return {
      posts: posts,
      getMoreCount: 0,
      tabNo: 0,
      uploadImageURL: "",
      filter: "",
      newContent: "",
    };
  },

  methods: {
    getMore() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.getMoreCount}.json`)
        .then((response) => {
          console.log(response);
          let newPost = response.data;
          this.posts.push(newPost);
          this.getMoreCount += 1;
        })
        .catch((error) => console.log(error));
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      this.tabNo = 1;
      this.uploadImageURL = URL.createObjectURL(file[0]);
      console.log(this.tabNo);
    },
    cancel() {
      if (this.tabNo > 0) this.tabNo--;
      else this.tabNo = 0;
    },
    next() {
      if (this.tabNo < 2) this.tabNo++;
      else this.tabNo = 0;
    },
    publish() {
      let newPost = {
        name: "Spark Kim",
        userImage: this.uploadImageURL,
        postImage: this.uploadImageURL,
        likes: 0,
        date: "June 12",
        liked: false,
        content: this.newContent,
        filter: this.filter,
      };
      this.posts.unshift(newPost);
      this.tabNo = 0;
    },
    changeContent(e) {
      console.log(e);
      this.newContent = e;
    },
  },
  mounted() {
    this.emitter.on("filter", (filter) => {
      this.filter = filter;
    });
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
