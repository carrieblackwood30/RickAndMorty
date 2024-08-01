<template>
    <div v-for="character in store.characters">
        <div class=" m-8"  v-if="character.name === $route.params.id">
            <div class="bg-gray-900 w-fit px-2 my-2 text-white">
                <RouterLink to="/">
                   <  go back
                </RouterLink>
            </div>
            
            <div class="flex gap-8 mt-8 text-xl text-bold items-center">
                <img :src="character.image" alt="">
                <div>
                    <h3 class="text-gray-600 text-2xl">name: </h3>
                    <h3 class="m-2">{{ character.name }}</h3>
                    <h3 class="text-gray-600 text-2xl">gender: </h3>
                    <h3 class="m-2">{{ character.gender }}</h3>
                    <h3 class="text-gray-600 text-2xl">species: </h3>
                    <h3 class="m-2">{{ character.species }}</h3>
                    <h3 class="text-gray-600 text-2xl">status: </h3>
                    <h3 class="m-2">{{ character.status }}</h3>
                    <h3 class="text-gray-600 text-2xl">location: </h3>
                    <h3 class="m-2">{{ character.location.name }}</h3>
                </div>
            </div>
            {{ console.log(character) }}
        </div>
    </div>
</template>

<script setup>
    import { useCharacterStore } from '@/stores/counter';
    import { onBeforeMount, ref } from 'vue';

    const store = useCharacterStore()

    onBeforeMount(() =>{
        store.charactersInit()
    })
</script>