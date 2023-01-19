<template>
  <h1>计数器1:{{ this.$store.state.helloWorld1.count1 }}</h1>
  <button @click="increment">增加</button>
</template>
<script>
export default {
  methods: {
    increment() {
      this.$store.commit({
        type:'helloWorld1/increment1',
        count:2
      })
    }
  }
}
</script>

