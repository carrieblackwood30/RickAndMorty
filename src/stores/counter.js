import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref(null)

  const charactersInit = () =>{
    axios.get("https://rickandmortyapi.com/api/character")
    .then((res) =>{
      characters.value = res.data.results
    })
  }

  return { characters, charactersInit }
})