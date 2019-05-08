<template>
  <div id="News">
    <div v-for="(news, index) in Newslist" :key="index">
      <NewsCard :news="news"></NewsCard>
    </div>
  </div>
</template>

<script>
import jsonp from "jsonp";
import NewsCard from "./NewsCard";

export default {
  name: "News",
  components: { NewsCard },
  data() {
    return {
      Newslist: null,
      show_toggle: true
    };
  },
  created() {
    this.$jsonp("http://api.jisuapi.com/news/get", {
      channel: "科技",
      start: 0,
      num: 10,
      appkey: "fd33d0e0df05c689"
    })
      .then(result => {
        var result = result.result["list"];
        this.Newslist = result;
      })
      .catch(err => {});
  },
  methods: {
    ShowToggle() {
      this.show_toggle = !this.show_toggle;
    }
  }
};
</script>
<style>
.overflow-hidden img:not(.usericon) {
  display: none;
}
.card {
  margin-bottom: 0.5rem;
}
/* .overflow-hidden {
  height: 300px;
  max-height: max-content;
} */
</style>