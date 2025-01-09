import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AddProduct from '../components/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
