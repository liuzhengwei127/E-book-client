<template>
  <div id="app">
      <Navbar/>
      <Books/>
  </div>
</template>

<script>
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Books from './pages/Books/Books'

export default {
  name: 'app',
  components: {
      Login,
      Navbar,
      Books,
  }
}
</script>

<style>
#app {

}
</style>
