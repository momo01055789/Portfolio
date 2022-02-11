import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from './components/AboutMe'
import Work from './components/Work'

const routes = 
[
    {
        name:'work',
        component:Work,
        path:'/work'
    },
    {
        name:'aboutme',
        component:AboutMe,
        path:'/aboutme',
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        if (savedPosition) {
            return savedPosition;
        }else if(to.hash){
            const options = {
                top: document.querySelector(to.hash).offsetTop,behavior: 'smooth',
            };
            window.scrollTo(options)
        }else{
            return{x: 0,y: 0};
        }
    }
})

export default router;