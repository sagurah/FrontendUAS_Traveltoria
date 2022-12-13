import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

function importComponent(path){
    return () => import(`./components/${path}.vue`)
}

// Pathnya masih bingung
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/landing",
            name: "LandingPage",
            meta: {title: 'Landing Page'},
            component: importComponent("LandingPage"),
        },
        {
            path: "/login",
            name: "LoginPage",
            meta: {title: 'Login Page'},
            component: importComponent("LoginPage"),
        },
        {
            path: "/register",
            name: "RegisterPage",
            meta: {title: 'Register Page'},
            component: importComponent("RegisterPage"),
        },
        {
            path: "/",
            component: importComponent("Dashboard/DashboardLayout"),
            children : [
                {
                    path: "/dash",
                    name: "DashboardMain",
                    meta: {title: "Dashboard"},
                    component: importComponent("DashboardMain"),
                },
            ]
        },
    ]
})

// router.beforeEach((to, from, next) => {
//     if(to.name != "LoginPage" && localStorage.getItem("token") == null && to.name!="RegisterPage" && to.name!= "LandingPage"){
//         next('landing')
//         document.to.meta.title = "Landing Page"
//     }

//     document.title = to.meta.title
//     next()
// });

export default router