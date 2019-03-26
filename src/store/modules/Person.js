const state = {
    isManager: false,
    isLogin: false,
    users: [],
}

const mutations = {
    changeManager (state) {
        state.isManager = !state.isManager
    },
    changeLogin (state) {
        state.isLogin = !state.isLogin
    },
}

export default {
    namespaced: true,
    state,
    mutations
}
