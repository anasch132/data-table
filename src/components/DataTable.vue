<template>
  <div class="overflow-x-auto border border-gray-200 rounded">
    <table class="min-w-full text-sm divide-y divide-gray-200">
      <table-header
        class="divide-x divide-gray-100"
        :headers="headers"
        @sortingKey="sort"
      ></table-header>
      <table-body
        class="divide-x divide-gray-100"
        :headers="headers"
        :tbody="dataTableSorted"
        @changed="changed"
      ></table-body>
    </table>
  </div>
</template>

<script>
import TableHeader from "./TableHeader.vue";
import TableBody from "./TableBody.vue";

export default {
  props: {
    headers: {
      type: Array,
      Default: [],
    },
    dataTable: {
      type: Array,
      default: [],
    },
  },
  components: {
    TableHeader,
    TableBody,
  },
  data: () => ({
    currentSort: null,
    currentSortDir: "asc",
  }),
  mounted() {
    // console.log(this.headers)
    this.dataTable;
  },
  computed: {
    dataTableSorted: function () {
      if (this.currentSort != null)
        return this.dataTable.sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        });
      return this.dataTable;
    },
  },
  methods: {
    changed(data) {
      this.$emit("save", data);
    },
    sort(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
  },
};
</script>
