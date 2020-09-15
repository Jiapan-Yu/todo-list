import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters.js'
import actions from './actions/actions.js'

export default () => {
  return new Vuex.Store({
    state: defaultState,
  
    mutations,

    getters,

    actions,

    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1,
        },
        mutations: {
          // 这儿的 state 为单独a模块里的 state
          updateText(state, text) {
            console.log('a.state', state)
            state.text = text
          },
        },
      },
      b: {
        state: {
          text: 2,
        },
      },
    },
  })
}