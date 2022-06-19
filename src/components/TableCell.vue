<template>
  <td
    class="text-left font-medium text-gray-900 whitespace-nowrap hover:bg-gray-100"
    :class="classes"
    @click="toggleEdit"
  >
    <div v-if="!edit" class="m-4 w-full h-full">{{ value }}</div>
    <input
      v-if="edit"
      type="text"
      :value="value"
      @change="blurInput"
      class="p-4 w-full h-full"
      :class="classes"
      :name="name"
    />
  </td>
</template>

<script>
export default {
  props: {
    classes: {
      type: [Array, String],
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    editable: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      default: "",
    },
  },
  data: () => ({
    edit: false,
  }),
  methods: {
    blurInput(event) {
      this.edit = false;
      this.$emit("blurInput", { [this.name]: event.target.value });
    },
    toggleEdit() {
      if (this.editable) {
        this.edit = true;
      }
    },
  },
};
</script>
