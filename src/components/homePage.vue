<template>
    <header class="text-center m-4 text-2xl">Rick and Morty API</header>
  
    <div class="flex gap-4 mx-4" v-if="$route.path === '/characters' || $route.path === '/episodes' || $route.path === '/location' ">
      <h3>lists:</h3>
      <div v-for="link in links">
        <RouterLink 
          :to="link" 
          class="cursor-pointer border-b"
            >{{ link }}</RouterLink>

          <KeepAlive>
            <component :is="pageSwitcher" :key="pageSwitcher" />
          </KeepAlive>
      </div>
    </div>
    
    <RouterView />

  </template>
  
<script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';

  const links = ["characters" ,"episodes", "location"]
  const pageSwitcher = ref("characters")
</script>
  