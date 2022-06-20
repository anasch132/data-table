<template>
  <thead>
    <tr class="divide-x divide-gray-200">
      <th
        v-for="header in headers"
        :key="header.id"
        :class="header.__classes__"
        :data-test="'head-' + header.id"
        class="p-4 font-medium text-center text-gray-900 whitespace-nowrap"
      >
        <div class="flex items-center text-center">
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
  },
  data: () => ({}),
  mounted() {},
};
</script>
