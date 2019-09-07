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
    this.getData()
  },
  methods: {
    ShowToggle() {
      this.show_toggle = !this.show_toggle;
    },
    async getData(){
      const res =await this.$jsonp("http://api.jisuapi.com/news/get", { channel: "科技", start: 0, num: 10, appkey: "be0614c5a2daffb3" });
      // let res = await this.$jsonp("http://api.jisuapi.com/news/get", { channel: "科技", start: 0, num: 100, appkey: "38caeac95ecec751" }); //我的
      console.log(res);
      if (!res) return ;
      if (res && res.status === 0){
        this.Newslist = res.result.list;
      } else {
        throw res
      }
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