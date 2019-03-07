import Vue from 'vue'
import Vuex from 'vuex'
import ShopCart from './modules/ShopCart'
import Person from './modules/Person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ShopCart,
        Person,
    },
})
