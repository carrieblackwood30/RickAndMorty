<template>
    <div v-for="location in store.location">
        <div class=" m-8"  v-if="location.name === $route.params.id">
            <div class="bg-gray-900 w-fit px-2 my-2 text-white">
                <RouterLink to="/">
                   <  go back
                </RouterLink>
            </div>

            <div>
                <h3 class="text-2xl">name: </h3>
                <p>{{ location.name }}</p>

                <h3 class="text-2xl">dimension: </h3>
                <p>{{ location.dimension }}</p>

                <h3 class="text-2xl">type: </h3>
                <p>{{ location.type }}</p>

                <h3 class="text-2xl">residents: </h3>
                <button
                    v-if="!buttonToggle"
                    class="bg-slate-500 text-white px-2 py-0.5"
                    @click="getResidents(location)"
                    >show</button>
                <button
                    class="bg-slate-500 text-white px-2 py-0.5"
                    v-if="buttonToggle"
                    @click="buttonToggle = false; residents = []"
                    >hide</button>

                <div class="flex flex-wrap gap-4">
                    <div v-for="resident in residents" 
                        class="flex border gap-2 justify-start items-center w-[200px]"
                        >
                        <img :src="resident.image" alt="" width="50">
                        <h3>{{ resident.name }}</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    import { useLocationStore } from '@/stores/location'; 
    import axios from 'axios';
    import { onBeforeMount, ref } from 'vue';

    const store = useLocationStore()
    const residents = ref([])
    const buttonToggle = ref(false)

    function getResidents(location){
        buttonToggle.value = true
        location.residents.map(resident =>{
            axios.get(resident)
            .then(res =>{
                residents.value.push(res.data)
            })
        })
    }

    onBeforeMount(() =>{
        store.locationInit()
    })
</script>