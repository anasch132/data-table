<template>
  <tbody class="divide-y divide-gray-100">
    <slot v-for="(data, i) in tbody" >
      <tr :key="i+Math.random()">
        <td
          v-for="header in headers"
          :key="header.id"
          class="p-4 text-left font-medium  text-gray-900 whitespace-nowrap"
        >
        
          {{ data[header.value] }} 
          <a class="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"  @click="clickedEdit()"> <icon name="pencil-alt" class="w-6 h-6 inline" /> </a>
        </td>
      </tr>
      <slot v-for="(datachild, i) in data.children" class="divide-none">
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
  methods: {
      clickedEdit() {
          console.log('clicked Edite')
      },
  }
};
</script>
