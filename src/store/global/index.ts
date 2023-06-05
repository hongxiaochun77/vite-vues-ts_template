import { createStore } from 'vuex'
import state from './global/state'
import mutation from './global/mutation'
const globalStore = {
  state:state,
  mutation:mutation
}
export default globalStore