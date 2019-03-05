<template>
  <div class="basics">
    <h1>{{ title + " - " + message}}</h1>
    <h2>{{ msg }}</h2>
    <div id="data-binding"></div>
    <div id="basic-stuff"></div>
  </div>
</template>

<script>
export default {
  name: 'Basics',
  data () {
    return {
      title: 'Basics',
      message: 'Get Your Toes Wet'
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
