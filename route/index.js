// router.js
import Vue from 'vue'
import Router from 'vue-router'

// Import your components
import Home from '@/pages/index.vue'
import About from '@/pages/about.vue'

// Tell Vue to use Vue Router
Vue.use(Router)

// Create a new Router instance
export function createRouter() {
    return new Router({
        mode: 'history', // Use history mode for clean URLs
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/about',
                component: About
            }
            // Add more routes as needed
        ]
    })
}
