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
            path: "/",
            name: "LandingPage",
            component: importComponent("LandingPage"),
        },
        {
            path: "/login",
            name: "LoginPage",
            component: importComponent("LoginPage"),
        },
        {
            path: "/register",
            name: "RegisterPage",
            component: importComponent("RegisterPage"),
        },
        {
            path: "/bus",
            name: "BusPage",
            component: importComponent("BusPage"),
        },
        {
            path: "/dashboard",
            name: "DashboardLayout",
            component: importComponent("DashboardLayout"),
            children : [
                {
                    path: "/",
                    name: "",
                    component: importComponent(""),
                }
            ]
        },
        
    ]
})

export default router