const state = {
    orders: [
        {
            books: [
                {
                    cover: './images/test1.jpg',
                    name: '看见',
                    author: '柴静',
                    price: 20,
                    count: 1,
                    money: 20,
                }
            ]
        },
        {
            books: [
                {
                    cover: './images/test1.jpg',
                    name: '看见',
                    author: '柴静',
                    price: 20,
                    count: 1,
                    money: 20,
                },
                {
                    cover: './images/test2.jpg',
                    name: '人类简史：从动物到上帝',
                    author: '尤瓦尔·赫拉利',
                    price: 40,
                    count: 1,
                    money: 40,
                }
            ]
        }
    ]
}

const mutations = {
    submitOrder(state, order) {
        state.orders.push(order)
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
