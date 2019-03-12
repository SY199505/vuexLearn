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
    <p>{{ arr }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      arr: []
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted () {
    this.arr = this.random([1, 2, 3, 4, 5])
    console.log(this.ifContain('231321', '32'))
  },
  methods: {
    random (arr) {
      var temp, randomIndex
      arr.forEach((item, index) => {
        randomIndex = Math.floor(Math.random()*arr.length)
        temp = arr[randomIndex]
        arr[randomIndex] = item
        arr[index] = temp
      })
      return arr
    },
    ifContain (longArr, shortArr) {
      var firstIndex = -1
      // longArr.forEach((item, index) => {
      //   if (item === shortArr[0]) {
      //     if (longArr.slice(index, shortArr.length).toString() === shortArr.toString()) {
      //       firstIndex = index
      //     }
      //   }
      // })
      // return firstIndex
      longArr = longArr.split('')
      shortArr = shortArr.split('')
      longArr.forEach((item, index) => {
        if (item === shortArr[0]) {
          if (arrEq(longArr.slice(index, index + shortArr.length), shortArr)) {
            firstIndex = index
          }
        }
      })
      return firstIndex
      function arrEq (arr1, arr2) {
        if (arr1 === arr2) {
          return true
        } else if (arr1.length !== arr2.length) {
          return false
        } else {
          for (var i in arr2) {
            if (arr1[i] !== arr2[i]) {
              return false
            }
          }
          return true
        }
      } 
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
