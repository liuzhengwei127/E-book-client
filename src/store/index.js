import Vue from 'vue'
import Vuex from 'vuex'
import ShopCart from './modules/ShopCart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ShopCart,
    },
})
