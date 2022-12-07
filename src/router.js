import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

function importComponent(path){
    return () => import(`./components/${path}.vue`)
}

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/landingPage",
            name: "LandingPage",
            component: importComponent("LandingPage"),
        },
        {
            path: "/",
            name: "DashboardLayout",
            component: importComponent("DashboardLayout"),
            children : [
                {
                    path: "/",
                    name: "",
                    component: importComponent(""),
                }
            ]
        }
    ]
})

export default router