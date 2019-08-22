import Vue from 'vue'
import Vuex from 'vuex'
import pages from '@/store/modules/pages'
import checklist from '@/store/modules/checklist'
import modal from '@/store/modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    pages,
    checklist,
    modal
  }
})
