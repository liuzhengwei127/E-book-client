<template>
  <div id="app">
      <Navbar/>
      <router-view/>
  </div>
</template>

<script>
    import Navbar from './components/Navbar/Navbar'

export default {
    name: 'app',
    components:{
        Navbar
    }
}
</script>

<style>
#app {

}
</style>
