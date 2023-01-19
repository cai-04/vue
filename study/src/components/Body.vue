<template>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: #f1f1f1">
      <div></div>
      <el-menu
        mode="vertical"
        background-color="#f1f1f1"
        text-color="#777777"
        active-text-color="#000000"
        :default-active="0"
        @select="selectItem"
      >
        <el-menu-item
          v-for="item in items"
          :index="item.index"
          :key="item.index"
        >
          <div id="text">{{ item.title }}</div>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <Markdown :content="content"></Markdown>
    </el-main>
  </el-container>
</template>

<script>
import Markdown from "./Markdown.vue";
import FileManager from '../tools/FileManager.js'
export default {
  mounted () {
    FileManager.getPostContent(this.topic, this.items[this.currentIndex].title).then((res)=>{
      this.content = res.data;
    })
  },
  props: ["items","topic"],
  data() {
    return {
      currentIndex:0,
      content:""
    }
  },
  components: {
    Markdown: Markdown,
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index
    }
  },
  watch: {
    currentIndex: function(val) {
        FileManager.getPostContent(this.topic, this.items[val].title).then((res)=>{
          this.content = res.data;
        })
    },
    topic: function(val) {
        FileManager.getPostContent(val, this.items[this.currentIndex].title).then((res)=>{
          this.content = res.data;
        })
    }
  }
};
</script>

<style scoped>
.el-menu-item.is-active {
  background-color: #ffffff !important;
}
</style>
