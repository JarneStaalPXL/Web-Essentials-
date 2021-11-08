import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Register/RegisterForm";
import AllClientsPage from "../components/Clients/AllClientsPage";
import Clients from "../views/Clients";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
