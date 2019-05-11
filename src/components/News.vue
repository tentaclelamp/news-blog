<template>
  <div id="News">
    <!-- <b-pagination :total-rows='rows' :per-page="10" v-model="currentPage" align='center'></b-pagination> -->
    <div v-for="(news, index) in Newslist" :key="index" id="News">
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
      rows: 4,
      currentPage:1,
      Newslist: null,
      show_toggle: true
    };
  },
  created() {
    this.$jsonp("http://api.jisuapi.com/news/get", {
      channel: "科技",
      start: 0,
      num: 100,
      appkey: "fd33d0e0df05c689"
    })
      .then(result => {
        var result = result.result["list"];
        console.log(Object.keys(result).length)
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