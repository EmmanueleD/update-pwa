<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />


  <div v-if="updateExists" class="aggionramento">
    <h1>Aggiornamento disponibile</h1>
    <button @click="refreshApp"> Aggiorna... </button>
  </div>


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import update from './mixin/update';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mixins: [update]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.aggionramento {
  background-color: maroon;
  color: aliceblue;
  margin: 2rem 0;
  padding: 2rem 4rem;
}
</style>
