<template>
  <h1>示例页面1</h1>
  <el-button type="primary" @click="click">跳转Demo2</el-button>
</template>

<script>
import Demo2 from "./Demo2.vue";
export default {
  //   beforeRouteEnter(to, from, next) {
  //     console.log(to, from, "前置守卫");
  //     next((w) => {
  //       console.log(w); // w为当前组件实例
  //     });
  //     return true;
  //   },
  //   beforeRouteUpdate(to, from) {
  //     console.log(to, from, "路由参数有更新时的守卫");
  //   },
  //   beforeRouteLeave(to, from) {
  //     console.log(to, from, "离开页面");
  //   },

  created() {
    console.log(this);
    this.$router.addRoute({
      path: "/demo2",
      component: Demo2,
      name: "Demo2",
    });
    // this.$router.removeRoute("Demo2");
    console.log(this.$router.hasRoute("Demo2"));
    console.log(this.$router.getRoutes());
  },
  methods: {
    click() {
      this.$router.push("/demo2");
    },
  },
};
</script>