<template>
    <div v-for="episode in store.episodes">
        <div class=" m-8"  v-if="episode.name === $route.params.id">
            <div class="bg-gray-900 w-fit px-2 my-2 text-white">
                <RouterLink to="/">
                   <  go back
                </RouterLink>
            </div>

            <div>
                <h3 class="text-2xl">name: </h3>
                <p>{{ episode.name }}</p>

                <h3 class="text-2xl">date: </h3>
                <p>{{ episode.air_date }}</p>

                <h3 class="text-2xl">episode: </h3>
                <p>{{ episode.episode }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useEpisodesStore } from '@/stores/episodes';
    import { onBeforeMount } from 'vue';

    const store = useEpisodesStore()

    onBeforeMount(() =>{
        store.episodesInit()
    })
</script>