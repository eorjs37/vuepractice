<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <input type="text" v-model="text">
    <input type="text" :value="oneway">
    <button @click="clickButton">버튼</button>
    <h1>{{ addIcon }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text: "안녕하세요",
      oneway: 'Hello <br/> World'
    }
  },
  methods: {
    clickButton() {
      alert("clickButton")
    }
  },
  computed: {
    addIcon() {
      return `🐏 ${this.text} 🦤`
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
