<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ $store.state.count }}</h2>
    <h2>{{ count }}</h2>
    <h3>{{ 'gettersCount:' + $store.getters.gettersCount }}</h3>
    <div>
      <button @click="$store.commit('add', 2)">+</button>
      <button @click="$store.commit('reduce', 1)">-</button>
      <p>mutation同步action异步</p>
      <button @click="$store.dispatch('addAction', 3)">+</button>
      <button @click="$store.dispatch({type: 'reduceAction', n: 3})">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
