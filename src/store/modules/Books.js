import {reqGetAllBook} from '../../api'

const state = {
    books: [],
}

const mutations = {
    book_modify (state, book) {
        state.books[book.index].name = book.form.name
        state.books[book.index].author = book.form.author
        state.books[book.index].ISBN = book.form.ISBN
        state.books[book.index].stock = book.form.stock
        state.books[book.index].outline = book.form.outline
        state.books[book.index].price = book.form.price
    },

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

    addBook (book) {
        commit('addBook', book)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
