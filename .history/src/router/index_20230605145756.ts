
import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router"
const modules = import.meta.glob('../views/home/*.vue')
function pathToFileURL(filePath:string){
  return modules[`../views/home/${filePath}.vue`]
}
const routes:RouteRecordRaw[]  = [
  {
    path: "/",
    name: "home",
    redirect: () => {
      return { path: '/home' } 
    }
  },
  {
    path: "/home",
    name: "home",
    component: pathToFileURL('index'),
  },
]
const router  = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router