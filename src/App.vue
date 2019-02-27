<template>
  <div id="app">
      <Navbar/>
      <router-view/>
      <ShopCart/>
  </div>
</template>

<script>
    import Navbar from './components/Navbar/Navbar'
    import ShopCart from "./components/ShopCart/ShopCart";

export default {
    name: 'app',
    components:{
        ShopCart,
        Navbar
    }
}
</script>

<style>
#app {
    height: 100%;
}
</style>
