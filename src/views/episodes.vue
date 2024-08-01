<template>
    <div class="flex gap-4 flex-wrap m-4 text-lg">
        <div v-for="episode in store.episodes" class="border w-[200px]">
            <RouterLink :to="`/episodesPage/${episode.name}`">
                <h3 class="bg-gray-600 text-white">{{ episode.name }}</h3>
                <p>{{ episode.air_date }}</p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useEpisodesStore } from '@/stores/episodes';
import { RouterLink } from 'vue-router';

const store = useEpisodesStore()

onBeforeMount(() =>{
    store.episodesInit()
})

</script>