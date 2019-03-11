const state = {
    isManager: false,
    isLogin: false,
    users: [
        {
            account: 'lzw',
            password: '123',
        }
    ],
}

const mutations = {
    changeManager (state) {
        state.isManager = !state.isManager
    },
    changeLogin (state) {
        state.isLogin = !state.isLogin
    },
    addUsers (state, user) {
        state.users.push(user)
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
