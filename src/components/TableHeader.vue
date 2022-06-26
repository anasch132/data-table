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
          <slot v-if="header.__sort__">
            <font-awesome-icon
              v-if="SortDir && sorting_key == header.value"
              class="mx-2"
              :class="
                SortDir == 'asc'
                  ? 'transition duration-300 transform rotate-180'
                  : 'transition duration-300 transform rotate-0'
              "
              icon="fa-solid fa-sort-up"
            />
            <font-awesome-icon
              class="mx-2"
              v-if="!SortDir"
              icon="fa-solid fa-sort"
            />
          </slot>
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
      default: null,
    },
  },
  data: () => ({
    sorting_key: null,
  }),
  methods: {
    sortingKey(key) {
      if (key.__sort__) {
        this.sorting_key = key.value;
        this.$emit("sortingKey", key.value);
      }
    },
  },
};
</script>
