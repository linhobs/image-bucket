import api from "../../api/imgur"
// state
const state = {
  token: null,
}
// getters functions
const getters = {
  // return state.token !== null && state.token !== undefined
  // let's get modern and trendy
  isLoggedIn: (state) => !!state.token,
}

// mutations
const mutations = {
  setToken: (state, token) => (state.token = token),
}
// actions (do stuff with async or make many mutations, actions carry a lot of action)
const actions = {
  logout: ({ commit }) => {
    // actions commit to mutations and mutations modify the state. hence actions don't need state
    // set token to null on logout
    commit("setToken", null)
  },
  login: () => {
    api.login()
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
