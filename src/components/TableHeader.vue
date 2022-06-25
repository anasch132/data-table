<template>
  <thead class="shadow-md">
    <tr class="divide-x divide-gray-200 bg-gray-100">
      <th
        v-for="header in headers"
        :key="header.id"
        :class="header.__classes__"
        :data-test="'head-' + header.id"
        class="p-4 font-large text-center text-gray-900 whitespace-nowrap"
        @click="sortingKey(header)"
      >
        <div
          class="flex items-center text-center"
          :class="header.__sort__ ? 'cursor-pointer' : ''"
        >
          {{ header.text }}
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
    },
    SortDir: {
      type: String,
    },
  },
  methods: {
    sortingKey(key) {
      console.log("clicked", key);
      if (key.__sort__) this.$emit("sortingKey", key.value);
    },
  },
};
</script>
