<template>
  <h1>计数器2:{{ this.$store.state.helloWorld2.count2 }}</h1>
  <button @click="increment">增加</button>
</template>
<script>
export default {
  methods: {
    increment() {
      this.$store.commit({
        type:'helloWorld2/increment2',
        count:2
      })
    }
  }
}
</script>