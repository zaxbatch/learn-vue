<template>
  <div class="intermediate">
    <h1>Intermediate</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Intermediate',
  data () {
    return {
      msg: 'Getting Deeper'
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
