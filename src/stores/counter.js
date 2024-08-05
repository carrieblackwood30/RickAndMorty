import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref(null)
  const itemsPerPage = ref(6)
  const pagesCount = ref()

  const charactersInit = () =>{
    axios.get("https://rickandmortyapi.com/api/character")
    .then((res) =>{
      characters.value = res.data.results
      pagesCount.value = Math.ceil(characters.value.length / itemsPerPage.value)
    })
  }


  return { characters, charactersInit, pagesCount }
})