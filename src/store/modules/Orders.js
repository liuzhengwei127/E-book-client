import {reqGetOrder} from "../../api";

const state = {
    orders: []
}

const mutations = {
    submitOrder(state, order) {
        state.orders.push(order)
    },

    updateOrder(state, orders) {
        state.orders = orders
    }
}

const actions = {
    getOrder({commit}, account) {
        reqGetOrder(account).then((data) => {
            const orders = []
            for (let items of data) {
                const order = []
                for (let item of items) {
                    const book = {
                         author: item.author,
                         name: item.bookname,
                         count: item.count,
                         price: item.price,
                         total: item.price*item.count
                     }
                     order.push(book)
                }
                orders.push(order)
            }
            commit('updateOrder', orders)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
