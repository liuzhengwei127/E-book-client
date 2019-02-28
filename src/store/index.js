import Vue from 'vue'
import Vuex from 'vuex'
import ShopCart from './modules/modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ShopCart,
    },
})
