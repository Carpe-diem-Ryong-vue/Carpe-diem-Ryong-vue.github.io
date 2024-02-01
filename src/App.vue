<script setup>
import {reactive, computed, ref } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [1,2,3]
    })
// a computed ref
const publishedBooksMessage = computed( () => {return author.books.length > 2 ? 'Yes' : 'No' })
</script>

<template>
    <span> 😎 :  </span>
    <span> {{author.books.length > 2 ? 'Yes' : 'No'}} </span>
    <div>computed ⬇️</div>
    <div>{{publishedBooksMessage}}</div>
</template>
