<template>
    <div class="overflow-x-auto">
  <table class="min-w-full text-sm divide-y divide-gray-200">
    <table-header :headers="headers"></table-header>
    <table-body :headers="headers" :tbody="data"></table-body>
    
  </table>
</div>
</template>

<script>

import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'

export default {
    props: {
        headers: {
            type: Array,
            Default: []
        },
        data: {
            type: Array,
            default: []
        },
    },
    components: {
        TableHeader,
        TableBody
    },
    data: () => ({
        
    }),
    mounted() {
        // console.log(this.headers)
    }
}
</script>