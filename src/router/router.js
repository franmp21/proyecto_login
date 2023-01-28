import { estaPermitidoAalgunos } from "@/shared/LocalStorage/LocalStorage";
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { 
        path: '/',
        name: 'home', 
        component: () =>import('../components/Home.vue') 
    },

    { 
        path: '/account',
        name: 'account', 
        component: () =>import('../components/Cuenta.vue'),
        children: [
            { 
                path: '/account/user/:user',
                name: 'user', 
                component: () =>import('../components/User.vue'),
                props: ({params, query}) => {
                    //console.log(route.params)
                    //console.log(route.query)
                    const username = params.user
                    const password = query.password
                    const level = query.level

                    return {
                        username: username,
                        password: password,
                        level: level
                    }
                },
                beforeEnter:[estaPermitidoAalgunos],
        
            },
        ]
    },

    { 
        path: '/about',
        name: 'sobre-nosotros', 
        component: () =>import('../components/About.vue')
    },

    { 
        path: '/:pathMatch(.*)*', 
        component: () =>import('../components/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router