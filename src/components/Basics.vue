<template>
  <div class="basics">
    <h1>Basics</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Basics',
  data () {
    return {
      msg: 'Get Your Toes Wet'
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
