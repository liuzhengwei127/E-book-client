const state = {
    isManager: false,
    isLogin: false,
    users: [
        {
            account: 'lzw',
            password: '123',
            allowed: true,
        },
        {
            account: '舒伯特',
            password: '123',
            allowed: true,
        },
        {
            account: '本拉登',
            password: '123',
            allowed: false,
        },
    ],
}

const mutations = {
    changeManager (state) {
        state.isManager = !state.isManager
    },
    changeLogin (state) {
        state.isLogin = !state.isLogin
    },
    addUser (state, user) {
        state.users.push(user)
    },
    changeAllow (state, item) {
        state.users[item.index].allowed = item.allowed
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
