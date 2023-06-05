import { createStore } from 'vuex'
import state from './global/state'
import mutation from './global/mutation'
const globalStore = createStore({
  ...state,
  ...mutation
})
export default globalStore