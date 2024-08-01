import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useEpisodesStore = defineStore('episodes', () => {
  const episodes = ref(null)

  const episodesInit = () =>{
    axios.get("https://rickandmortyapi.com/api/episode")
    .then((res) =>{
        episodes.value = res.data.results
    })
  }

  return { episodes, episodesInit }
})