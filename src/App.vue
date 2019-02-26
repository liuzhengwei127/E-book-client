<template>
  <div id="app">
      <Navbar/>
      <Login/>
  </div>
</template>

<script>
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'

export default {
  name: 'app',
  components: {
      Login,
      Navbar,
  }
}
</script>

<style>
#app {

}
</style>
