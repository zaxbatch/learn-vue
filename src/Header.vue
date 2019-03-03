<template>
  <div id="header">
    <div class="w3-bar w3-black">
      <a href="/" class="w3-bar-item w3-button w3-mobile">Learn Vue</a>
      <a href="/#/basics" class="w3-bar-item w3-button w3-mobile">Basics</a>
      <a href="/#/intermediate" class="w3-bar-item w3-button w3-mobile">Intermediate</a>
      <a href="/#/advanced" class="w3-bar-item w3-button w3-mobile">Advanced</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {

}
</style>
