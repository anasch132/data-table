<template>
  <tbody class="divide-y divide-gray-100">
    <slot v-for="(data, i) in tbody">
      <tr
        :key="i + Math.random()"
        :class="data.__classes__ ? data.__classes__.__all__ : ''"
      >
        <td
          v-for="header in headers"
          :key="header.id"
          class="p-4 text-left font-medium text-gray-900 whitespace-nowrap"
          :class="
            data.__classes__
              ? data.__classes__[header.value]
              : header.__classes__
              ? header.__classes__
              : ''
          "
        >
          <!-- {{ handleData(data[header.value], header.value) }} -->
          <input
            type="text"
            :value="handleData(data[header.value], header.value)"
            @blur="(e) => showInput(e, data)"
            :id="[header.value]"
            :class="data.__classes__ ? data.__classes__[header.value] : ''"
            :name="[header.value]"
          />
        </td>
        <td v-if="data.editable">
          <button
            class="p-1 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 group-hover:inline-block focus:outline-none focus:ring"
            @click="clickedEdit(data)"
          >
            <icon name="pencil-alt" class="w-4 h-4" />
          </button>
        </td>
      </tr>
      <slot v-for="(datachild, i) in data.children" class="divide-none">
        <tr :key="i + Math.random()">
          <td
            v-for="(header, i) in headers"
            :key="header.id + i"
            class="p-4 text-left font-medium text-gray-900 whitespace-nowrap"
            :class="i == 0 ? 'pl-16' : 'pl-4'"
          >
            {{ datachild[header.value] }}
          </td>
        </tr>
      </slot>
    </slot>
  </tbody>
</template>

<script>
export default {
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
  mounted() {},
  methods: {
    clickedEdit(row) {},
    handleData(data, key) {
      if (data && typeof data == "object") {
        return data.value(
          key,
          this.tbody.filter((row) => data.rows.includes(row.key))
        );
      }
      return data;
    },
    showInput(event, row) {
      // console.log(data);
      let nwRow = { ...row, [event.target.id]: event.target.value };
      this.$emit("changed", nwRow);
      // console.log(event.target.id, row);
    },
  },
};
</script>
