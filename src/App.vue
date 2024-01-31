<script setup>
import { ref } from 'vue'
import Mainpokemon from "@/assets/pokemon.json"


const parentMessage = ref('Parent')
/*
const items = ref([
	{
	    message : 'Foo'
	},{
	    message : 'Bar'}
])
*/
const pokemons = ref(Mainpokemon.pokemon)
</script>

<template>
<!--
<li v-for="(item,index) in items">
{{parentMessage}} - {{index}} - {{item.message}}
</li>
-->
<li v-for="(pokemon,index) in pokemons" :key="index">
번호 : {{pokemon.num}}<br> 
이름  : {{pokemon.name}} <br>
속성 : {{pokemon.type}}<br>   약점 :  {{pokemon.weaknesses}} <br>
<img :src="pokemon.img" alt="Pokemon Image" style="max-width: 100px; max-height: 100px;"><br>

</li>
</template>
