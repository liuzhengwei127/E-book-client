const state = {
    books: [],
}

const mutations = {
    addtocart(state, book) {
        let repeat = false;
        state.books.forEach((item) => {
            if (book.name === item.name && book.author === item.author) {
                item.money += book.money
                item.count += book.count
                repeat = true
            }
        })

        if (!repeat)
            state.books.push(book)
    },
    deletebook(state, index) {
        state.books.splice(index, 1)
    }
}


export default {
    namespaced: true,
    state,
    mutations
}
