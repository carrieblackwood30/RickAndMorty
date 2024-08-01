<template>
    <div v-for="location in store.location">
        <div class=" m-8"  v-if="location.name === $route.params.id">
            <div class="bg-gray-900 w-fit px-2 my-2 text-white">
                <RouterLink to="/">
                   <  go back
                </RouterLink>
            </div>

            {{ console.log(location) }}

            <div>
                <h3 class="text-2xl">name: </h3>
                <p>{{ location.name }}</p>

                <h3 class="text-2xl">dimension: </h3>
                <p>{{ location.dimension }}</p>

                <h3 class="text-2xl">type: </h3>
                <p>{{ location.type }}</p>

                <h3>residents: </h3>
                <h3 v-for="resident in location.residents">
                    {{ resident }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useLocationStore } from '@/stores/location'; 
    import { onBeforeMount } from 'vue';

    const store = useLocationStore()

    onBeforeMount(() =>{
        store.locationInit()
    })
</script>