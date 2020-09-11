import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters.js'

export default () => {
  return new Vuex.Store({
    state: defaultState,
  
    mutations,

    getters,
  })
}