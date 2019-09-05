<template>
  <div id="NewsCard">
    <b-container class="col-md-6">
      <b-row align-h="center">
        <b-card>
          <b-media
            vertical-align="top"
            tag="li"
            :class="show_toggle ? 'overflow-hidden' : 'overflow'"
          >
            <b-media vertical-align='center'>
              <b-img-lazy
                center
                rounded="circle"
                slot="aside"
                :src="news.pic"
                width="64"
                height="64"
                alt="placeholder"
                class="usericon"
              ></b-img-lazy>
              <b-link :href="news.url">{{ news.title }}</b-link>
            </b-media>
            <p v-html="news.content"></p>
          </b-media>
          <b-button
            block
            @click="ShowToggle"
            :variant="show_toggle ? '':'outline-warning'"
          >{{ show_toggle ? '阅读全文' : '折叠' }}</b-button>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["news"],
  data() {
    return {
      show_toggle: true
    };
  },
  mounted(){
  },
  methods: {
    ShowToggle() {
      this.show_toggle = !this.show_toggle;
    }
  }
};
</script>
<style>
.overflow-hidden {
  height: 300px;
  max-height: max-content;
}
.overflow {
  max-height: max-content;
}
img {
  max-width: 100%;
}
.media-body {
  max-width: 100%;
  flex-wrap: wrap;
  text-align: center;
}
.outline-warning:focus {
  background: transparent;
}
.title {
  display: inline-flex;
  flex-wrap: nowrap;
}
</style>