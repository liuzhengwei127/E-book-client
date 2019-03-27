import {reqGetAllBook} from '../../api'

const state = {
    books: [],
}

const mutations = {
    updateBook(state, books) {
        state.books = books
    }
}

const actions = {
    getAllBook({commit}) {
        reqGetAllBook().then( (data) => {
            commit('updateBook', data)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
