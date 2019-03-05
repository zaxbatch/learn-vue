<template>
  <div id="basic-stuff">
    <h3><u>Generic List</u></h3>
    <div class="list">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <hr>
    <h3><u>User Interaction</u></h3>
    <button v-on:click="getTime">Time</button>
    <h4>Name: {{ user }}</h4>
    <input v-model="user">
  </div>
</template>

<script>
export default {
  name: 'BasicStuff',
  data () {
    return {
      todos: [
        { text: 'Code' },
        { text: 'Eat' },
        { text: 'Code again' },
        { text: 'Sleep' },
        { text: 'Repeat' }
      ],
      getTime: function () { alert('Time: ' + new Date) },
      user: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.list {
  display: flex;
  justify-content: center;
}

li:hover {
  color:red;
}
</style>
