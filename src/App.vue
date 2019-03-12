<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>{{ count1 }}</h3>
    <h3>{{ 'count1Alias: ' + count1Alias }}</h3>
    <h3>{{ countPlusLocalState }}</h3>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {

    }
  },
  // computed: mapState(["count"])
  computed: mapState({
    count1: state => state.count,
    count1Alias: 'count',
    countPlusLocalState (state) {
      return 'countPlusLocalState: ' + state.count
    }
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
