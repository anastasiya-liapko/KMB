const state = {
  flip: false
}

const mutations = {
  'FLIP' () {
    state.flip = !state.flip
  }
}

const actions = {
  flip: ({ commit }) => {
    commit('FLIP')
  }
}

const getters = {
  flip: state => {
    return state.flip
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
