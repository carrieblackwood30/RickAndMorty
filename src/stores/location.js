import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useLocationStore = defineStore('location', () => {
  const location = ref(null)

  const locationInit = () =>{
    axios.get("https://rickandmortyapi.com/api/location")
    .then((res) =>{
        location.value = res.data.results
    })
  }

  return { location, locationInit }
})