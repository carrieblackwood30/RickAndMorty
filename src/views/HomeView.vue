<template>
  <div class="flex flex-wrap gap-4 m-8">
      <div v-for="character in store.characters">
          <RouterLink :to="`/characterPage/${character.name}`" class="border w-[200px] flex gap-2 items-center">
          <img :src="character.image" alt="" width="50">
          <h3 class="text-lg">{{ character.name }}</h3>
          </RouterLink>
      </div>
  </div>
</template>

<script setup>
    import { useCharacterStore } from '@/stores/counter';
    import { onMounted } from 'vue';
  
    const store = useCharacterStore()
  
    onMounted(() =>{
      store.charactersInit()
    })
</script>