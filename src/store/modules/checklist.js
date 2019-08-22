const state = {
  mode: ''
}

const mutations = {
  'CHANGE_MODE' (state, mode) {
    state.mode = mode
    let sliderDots = document.querySelector('.slick-dots')
    mode === '' ? sliderDots.style.display = 'flex' : sliderDots.style.display = 'none'
  }
}

const actions = {
  changeMode: ({ commit }, mode) => {
    commit('CHANGE_MODE', mode)
  }
}

const getters = {
  mode: state => {
    return state.mode
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
