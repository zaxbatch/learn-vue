<template>
  <div class="advanced">
    <h1>Advanced</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Advanced',
  data () {
    return {
      msg: 'Caution: Deep End!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
