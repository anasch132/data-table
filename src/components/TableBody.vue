<template>
  <tbody class="divide-y divide-gray-100">
    <slot v-for="(data, i) in tbody">
      <tr
        :key="i + Math.random()"
        :class="data.__classes__ ? data.__classes__.__all__ : ''"
        class="divide-x divide-gray-200 divide-y divide-white"
      >
        <slot v-for="header in headers">
          <table-cell
            :key="header.id"
            :classes="getClasses(data, header)"
            :name="header.value"
            :value="handleData(data[header.value], header.value)"
            :editable="data.editable"
            @blurInput="(e) => editInput(e, data)"
          ></table-cell>
        </slot>
      </tr>
      <slot v-for="(datachild, i) in data.__children__" class="divide-none">
        <tr
          :key="i + Math.random()"
          :class="datachild.__classes__ ? datachild.__classes__.__all__ : ''"
        >
          <slot v-for="header in headers">
            <table-cell
              class="px-6"
              :key="header.id"
              :classes="getClasses(datachild, header)"
              :name="header.value"
              :value="handleData(datachild[header.value], header.value)"
              :editable="datachild.editable"
              @blurInput="(e) => editInput(e, data)"
            ></table-cell>
          </slot>
        </tr>
      </slot>
    </slot>
  </tbody>
</template>

<script>
import TableCell from "./TableCell.vue";

export default {
  components: {
    TableCell,
  },
  props: {
    headers: {
      type: Array,
      Default: [],
    },
    tbody: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    input: null,
  }),
  methods: {
    handleData(data, key) {
      if (data && typeof data == "object") {
        return data.value(
          key,
          this.tbody.filter((row) => data.rows.includes(row.key))
        );
      }
      return data;
    },
    editInput(event, row) {
      let nwRow = { ...row, ...event };
      this.$emit("changed", nwRow);
    },

    getClasses(data, header) {
      let cellClasses =
        data.__classes__ && data.__classes__[header.value]
          ? data.__classes__[header.value]
          : [];
      let headerClasses = header.__classes__ ? header.__classes__ : [];

      cellClasses = cellClasses.filter((element) => !!element);
      headerClasses = headerClasses.filter((element) => !!element);

      return cellClasses.concat(headerClasses);
    },
  },
};
</script>
