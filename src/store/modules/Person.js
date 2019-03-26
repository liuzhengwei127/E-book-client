import {reqGetUserState} from '../../api'

const state = {
    isManager: false,
    isLogin: false,
    userStates: [],
}

const mutations = {
    changeManager (state) {
        state.isManager = !state.isManager
    },
    changeLogin (state) {
        state.isLogin = !state.isLogin
    },

    updateUserState (state, userStates) {
        state.userStates = userStates
    }
}

const actions = {
    getUerState ({commit}) {
        reqGetUserState().then((data) => {
            commit('updateUserState', data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
