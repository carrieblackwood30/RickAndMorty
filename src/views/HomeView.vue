<template>
  <div class="flex flex-wrap m-8 justify-center">
    <div v-for="character in store.characters">
      <RouterLink 
        v-show="character.id >= startPoint && character.id <= finishPoint"
        :to="`/characterPage/${character.name}`" 
          >
        <div class="border transition-all duration-300 p-1 flex gap-2 flex-col items-center w-[240px] h-[280px] mx-4 hover:scale-110">
          <img :src="character.image" :alt="character.name">
          <h3 class="text-xl text-bold">{{ character.name }}</h3>
        </div>
      </RouterLink>
    </div>
  </div>
  <div class="flex gap-4 justify-center">
      <div v-for="page in store.pagesCount">
        <button 
          @click="changePages(page)" 
          class="text-2xl w-8 h-8"
          :class="page === currentPage ? 'bg-gray-700 w-8 h-8 rounded-full text-white' : ''"
          > {{ page }} </button>
    </div>
  </div>
</template>

<script setup>
    import { useCharacterStore } from '@/stores/counter'
    import { onMounted, ref } from 'vue';
  
    const store = useCharacterStore()
    const startPoint = ref(1)
    const finishPoint = ref(6)
    const currentPage = ref(1)


    function changePages(page){
      finishPoint.value = 7 * page - (page * 1)
      startPoint.value = finishPoint.value - 5

      currentPage.value = page
    }

    onMounted(() =>{
      store.charactersInit()
    })
</script>