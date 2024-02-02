<script setup>
import {ref} from 'vue'

const show = ref(ture)
const list = ref([1,2,3])

function addList(){
    list.value.push

    
</script>

<template>
    <button @click="<?>">List 렌더링 ON/OFF </button>
    <button @click="<?>">List 추가 </button>
    <button @click="<?>">List 제거 </button>
    <button @click="<?>">List 뒤집기 </button>

<ul v-if="<?>">
    <li v-for = "item of List">{{item}}</li>
</ul>
<p v-else-if="list.length">List is not empty, but hidden. </p>
<p v-else>List is empty.</p>

</template>
