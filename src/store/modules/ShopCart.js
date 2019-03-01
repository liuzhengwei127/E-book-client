const state = {
    books: [],
}

const mutations = {
    addtocart(state, book) {
        state.books.push(book)
    }
}


export default {
    namespaced: true,
    state,
    mutations
}
