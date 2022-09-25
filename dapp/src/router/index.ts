import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"Layout",
            component: ()=>import("../layouts/index.vue")
        }
    ]
})
 