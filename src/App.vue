<template>
  <header>
     <NavBar/>
     
  </header>
  <router-view/>
    
  
</template>

<script>
import { escribeLocalStorage,  } from "./shared/LocalStorage/LocalStorage";
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
  mounted(){
    escribeLocalStorage('permitido', 'No')
  }
}
</script>



<style scoped>
div{
  text-align: center;
}
</style>
