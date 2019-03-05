<template>
  <div id="data-binding">
    <h2 class="hover" v-bind:title="message">{{ title }}</h2>
    <p>{{ credits + " " + developer }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'Data Binding',
      message: 'v-bind adds hover message',
      credits: 'This app was made by',
      developer: 'Zerric Dotcom'

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.hover:hover {
  color: red;
  font-size: 3rem;
}

</style>
