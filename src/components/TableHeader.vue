<template>
  <thead>
    <tr>
      <th v-for="(header) in headers" :key="header.id" class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
        <div class="flex items-center">
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
  mounted() {
  },
};
</script>
