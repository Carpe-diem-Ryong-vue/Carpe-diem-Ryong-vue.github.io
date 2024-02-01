<script setup>
import { ref, onUpdated,onMounted,onBeforeUpdate } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log('Component is mounted')
})

onBeforeUpdate(() => {
  console.log('Before update:', document.getElementById('count').textContent)
})
    
onUpdated( () => {
	console.log(document.getElementById('count').textContent)
	})

</script>

<template>
    <button id="count" @click="count++"> {{ count}}</button>
</template>
