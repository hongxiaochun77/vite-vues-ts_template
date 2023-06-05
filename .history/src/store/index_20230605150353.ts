import { createStore } from 'vuex'
import state from './global/state'
const store = createStore({
  ...state,
  mutations: {
    increment (state:any) {
      state.count++
    }
  }
})
export default store