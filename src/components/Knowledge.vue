<template>
  <div>
    <b-modal ref="authtip" title="登录认证提醒" centered>
      <p class="my-4">请先登录再进行操作！</p>
    </b-modal>
    <b-container>
      <!-- it's what i have learnt everyday! -->
      <b-row>
        <b-col cols="10">
          <div class="editor" v-if="insert">
            <b-input placeholder="请输入title" v-model="title"></b-input>
            <editor
              v-model="editorText"
              mode="markdown"
              :options="editorOptions"
              :height="0.8*fullHeight + 'px'"
            />
            <b-button @click="complete" id="complete">提交</b-button>
          </div>
          <div class="articles" v-if="!insert">
            <div v-for="(article, index) in articles" :key="index" class="article">
              <b-card>
                <b-media>
                  <p>{{ article.title }}</p>
                  <viewer :value="article.content"/>
                  <p style="float: right">{{ article.datetime }}</p>
                </b-media>
                <b-button variant="danger" class="delete" @click="remove_article(article.id)">删除</b-button>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col>
          <b-button
            variant="outline-info"
            rounded="circle"
            @click="toggle"
          >{{ insert ? '显示' : '编辑' }}</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Editor, Viewer } from "@toast-ui/vue-editor/";

export default {
  name: "Knowledge",
  components: { editor: Editor, viewer: Viewer },
  data() {
    return {
      articles: [],
      title: "",
      insert: false,
      ctime: new Date(),
      fullHeight: parseInt(document.documentElement.clientHeight),
      editorText: "开始编辑博客日志",
      editorOptions: {
        // minHeight: "300px",
        language: "en_US",
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: true,
        hideModeSwitch: true,
        toolbarItems: [
          "highlight",
          "heading",
          "bold",
          "font",
          "italic",
          "strike",
          "divider",
          "hr",
          "quote",
          "divider",
          "ul",
          "ol",
          "task",
          "indent",
          "outdent",
          "divider",
          "table",
          "image",
          "link",
          "divider",
          "code",
          "codeblock",
          "color"
        ]
      }
    };
  },
  methods: {
    toggle() {
      this.insert = !this.insert;
    },
    complete() {
      // const data = { bar: 123 };
      const options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: this.qs.stringify({
          title: this.title,
          content: this.editorText
        }),
        url: "http://localhost:5000/api/v1/articles",
        responseType: "json",
        withCredentials: false
      };
      this.axios(options)
        .then(result => {
          this.retrieve();
          this.insert = !this.insert;
          this.editorText = "开始编辑博客日志";
          this.title = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    retrieve() {
      const options = {
        method: "GET",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        params: {
          //查询参数
          title: "test"
          // content: this.editorText
        },
        url: "http://localhost:5000/api/v1/articles",
        responseType: "json",
        withCredentials: false
      };
      this.axios(options)
        .then(result => {
          this.articles = result["data"];
        })
        .catch(err => {
          console.log(err);
        });
    },
    remove_article(article_id) {
      const options = {
        method: "DELETE",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        params: {
          //文章id
          id: article_id
          // content: this.editorText
        },
        url: "http://localhost:5000/api/v1/articles",
        responseType: "json",
        withCredentials: false
      };
      this.axios(options)
        .then(result => {
          this.retrieve();
        })
        .catch(err => {
          if (err.response.status == 401) {
            const options = {
              method: "GET",
              headers: { "content-type": "application/x-www-form-urlencoded" },
              params: {
                //文章id
                nickname: 'sanyo',
                pwd: '1234'
                // content: this.editorText
              }
            };
            this.axios(options).then((result) => {
              console.log(result)
            }).catch((err) => {
              console.log(err)
            });
            this.$refs["authtip"].show();
          }
        });
    }
  },
  created() {
    const options = {
      method: "GET",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      params: {
        //查询参数
        title: "test"
        // content: this.editorText
      },
      url: "http://localhost:5000/api/v1/articles",
      responseType: "json",
      withCredentials: false
    };
    this.axios(options)
      .then(result => {
        this.articles = result["data"];
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 2s;
}
.row {
  flex-wrap: nowrap;
}
.articles {
  text-align: center;
}
#complete {
  float: right;
}
/* .article{
  border: 1px solid black;
  margin-bottom: 0.5rem;
} */

.card {
  margin-bottom: 0.5rem;
  box-shadow: 0 0 0.1rem gray;
}
.editor input {
  margin-bottom: 0.5rem;
}
.delete {
  float: right;
}
</style>