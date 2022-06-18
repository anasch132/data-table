<template>
  <div id="app">
    <data-table class="ma-4" :headers="data.headers" :data="data.food"></data-table>
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue'
import JsonData from './DataTable'
export default {
  name: 'App',
  components: {
    DataTable
  },
  data: () => ({
    data: JsonData
  }),
  mounted() {
    this.data = JsonData

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
