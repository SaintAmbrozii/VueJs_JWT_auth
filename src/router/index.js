import {createRouter,createWebHistory} from "vue-router";
import Registration from "../Registration.vue";
import Rates from "../Rates.vue";
import Home from "../Home.vue";
import Login from "../Login.vue";
import Profile from "../Profile.vue";

const routes = [{path: '/', name: 'home',component: Home},
    {path: '/registration', name: 'registration', component: Registration},
    {path: '/rates',name: 'rates',component: Rates},
    {path: '/profile',name: 'profile',component: Profile},
    {path: '/login',name: 'login',component: Login}]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router