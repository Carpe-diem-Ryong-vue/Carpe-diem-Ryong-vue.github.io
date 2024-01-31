<script setup>
import { ref } from 'vue'
import Mainpokemon from "@/assets/pokemon.json"


const parentMessage = ref('Parent')
const pokemons = ref(Mainpokemon.pokemon)
</script>

<template>
    <ul>
	 <template v-for="(pokemon,index) in pokemons" :key="index">
<li v-if="pokemon.type.includes('Electric') ">
번호 : {{pokemon.num}}<br> 
이름  : {{pokemon.name}} <br>
속성 : {{pokemon.type}}<br>   약점 :  {{pokemon.weaknesses}} <br>
<img :src="pokemon.img" alt="Pokemon Image" style="max-width: 100px; max-height: 100px;"><br>
<hr>
</li>
</template>
</ul>
</template>
