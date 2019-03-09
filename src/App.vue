<template>
  <div id="app">
      <Navbar class="mb-5"></Navbar>
      <router-view/>
      <ShopCart v-if="!isManager"></ShopCart>
  </div>
</template>

<script>
    import Navbar from './components/Navbar/Navbar'
    import ShopCart from "./components/ShopCart/ShopCart";
    import {mapState} from 'vuex'

export default {
    name: 'app',
    components:{
        ShopCart,
        Navbar
    },
    computed: {
        ...mapState({
            isManager: state => state.Person.isManager,
        }),
    },
}
</script>

<style>
#app {
    height: 100%;
}

::-webkit-scrollbar {/*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 4px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
</style>
