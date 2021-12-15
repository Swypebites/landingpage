import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'
import PageNotFound from './components/PageNotFound.vue'
import Home from './components/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name: 'Home', component: Home},
        {path:'/pagenotfound', name: 'pagenotfound', component: PageNotFound}
    ]
})
createApp(App)
.use(router)
.mount('#app')
