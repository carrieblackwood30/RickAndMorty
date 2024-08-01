<template>
    <div class="flex gap-4 flex-wrap m-4 text-lg">
        <div v-for="location in store.location" class="border w-[200px]">
            <RouterLink :to="`/locationPage/${location.name}`">
                <h3 class="bg-gray-600 text-white">{{ location.name }}</h3>
                <p>{{ location.type }}</p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useLocationStore } from '@/stores/location';
import { RouterLink } from 'vue-router';

const store = useLocationStore()

onBeforeMount(() =>{
    store.locationInit()
})

</script>