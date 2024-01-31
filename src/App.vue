<script setup>
import { ref } from 'vue'
import category from "@/assets/category.json"


const parentMessage = ref('Parent')
/*
const items = ref([
	{
	    message : 'Foo'
	},{
	    message : 'Bar'}
])
*/
const items = ref(category)
</script>

<template>
<!--
<li v-for="(item,index) in items">
{{parentMessage}} - {{index}} - {{item.message}}
</li>
-->
<li v-for="(item,index) in items" :key="index">
{{item.name}}  - {{item.code}}
</li>
</template>
