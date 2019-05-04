<template>
  <div>
    <b-container>
      <!-- it's what i have learnt everyday! -->
      <b-row>
        <b-col cols="11">
          <editor
            v-if="insert"
            v-model="editorText"
            mode="markdown"
            :options="editorOptions"
            :height="0.8*fullHeight + 'px'"
          />
          <div class="articles" v-if="!insert">
            <viewer :value="editorText"/>
          </div>
        </b-col>
        <b-col>
          <b-button
            variant="outline-info"
            rounded="circle"
            @click="complete"
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
    complete() {
      this.insert = !this.insert;
    }
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
  text-align: center
}
</style>