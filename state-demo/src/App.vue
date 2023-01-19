<template>
  <HelloWorld />
  <HelloWorld2 />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld2
  }
}
</script>
