import { createStore } from 'vuex'
import globalStore from './global/index'
const store = createStore({
  modules:{
    global:globalStore
  }
})
export default store