<template>
  <div id="app">
    <data-table
      class="ma-4"
      :headers="data.headers"
      :dataTable="data.body"
      @save="saveData"
    >
    </data-table>
  </div>
</template>

<script>
import DataTable from "./components/DataTable.vue";
import JsonData from "./assets/DataTable";
export default {
  name: "App",
  components: {
    DataTable,
  },
  data: () => ({
    data: JsonData,
  }),
  created() {
    this.data.body = JsonData.body.map((item) => {
      if (item.key == "key3")
        return {
          ...item,
          fat: { rows: ["key1", "key2", "key4", "key5"], value: this.summ },
        };
      return item;
    });
  },

  methods: {
    summ(key, rows) {
      let summ = 0;

      for (const row of rows) {
        summ += parseFloat(row[key]);
      }
      return summ;
    },
    saveData(nwRow) {
      console.log("from App");
      console.log(nwRow);
      this.data.body = this.data.body.map((row) =>
        row.key === nwRow.key ? nwRow : row
      );
    },
  },
};
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
