<template>
  <p v-html="data"></p>
</template>

<script>
// 引入marked库
import marked from "marked";
export default {
  // 提供外部属性用来设置内容
  props:["content"],
  computed: {
    data() {
      // 计算属性，将外部设置的文章markdown内容转换成HTML
      return marked(this.content);
    },
  },
};
</script>
