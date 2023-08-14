import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue';
import Education from './views/Education.vue';
import  Contact from './views/Contact.vue';
import Projects from './views/Projects.vue';

const routes = [
{path: "/", component: Home},
{path: "/education", component: Education},
{path: "/contact", component: Contact},
{path: "/projects", component: Projects},
];

const router = createRouter({
history: createWebHistory(),
routes,
});
createApp(App).use(router).mount('#app')
