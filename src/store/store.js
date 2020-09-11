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
        state: {
          text: 1,
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