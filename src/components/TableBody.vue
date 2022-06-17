<template>
  <tbody class="divide-y divide-gray-100">
    <slot v-for="(data, i) in tbody" >
      <tr :key="i+Math.random()">
        <td
          v-for="header in headers"
          :key="header.id"
          class="p-4 text-left font-medium text-gray-900 whitespace-nowrap"
        >
          {{ data[header.value] }}
        </td>
      </tr>
      <slot v-for="(datachild, i) in data.children" >
        <tr :key="i+Math.random()">
          <td
            v-for="(header, i) in headers"
            :key="header.id + i"
            class="p-4 text-left font-medium text-gray-900 whitespace-nowrap"
            :class="(i == 0) ? 'pl-16' : 'pl-4'"
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
  mounted() {},
};
</script>
