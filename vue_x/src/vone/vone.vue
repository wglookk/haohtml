<template>
  <div class="vone">
    <div class="aaa">{{ aaa +''+ bbb }}</div>
    

  </div>
</template>

<script>
export default {
  name: 'vone',
  data () {
    return {
      aaa: '你想咋地',
      bbb: '123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.vone .aaa{font-size:18px;color:green;}
.vone .bbb{font-size:12px;color:#999;}
</style>
