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
            path: "/buses",
            name: "BusPage",
            meta: {title: 'Bus Page'},
            component: importComponent("BusPage"),
        },
        {
            path: "/keretas",
            name: "Kereta Page",
            meta: {title: 'Kereta Page'},
            component: importComponent("KeretaPage"),
        },
        {
            path: "/pesawats",
            name: "Pesawat Page",
            meta: {title: 'Pesawat Page'},
            component: importComponent("PesawatPage"),
        },
        {
            path: "/contact",
            name: "ContactPage",
            meta: {title: 'Contact Page'},
            component: importComponent("ContactPage")
        },
        {
            path: "/",
            component: importComponent("Dashboard/DashboardLayout"),
            children : [
                {
                    path: "/",
                    name: "DashboardMain",
                    meta: {title: "Dashboard"},
                    component: importComponent("Dashboard/DashboardMain"),
                },
                {
                    path: "/kereta",
                    name: "KeretaView",
                    meta: {title: "TRAVELTORIA - Kereta"},
                    component: importComponent("Views/KeretaView"),
                },
                {
                    path: "/pesawat",
                    name: "PesawatView",
                    meta: {title: "TRAVELTORIA - Pesawat"},
                    component: importComponent("Views/PesawatView"),
                },
                {
                    path: "/bus",
                    name: "BusView",
                    meta: {title: "TRAVELTORIA - Bus"},
                    component: importComponent("Views/BusView"),
                },
                {
                    path: "/akun",
                    name: "ProfileView",
                    meta: {title: "TRAVELTORIA - Account"},
                    component: importComponent("Views/ProfileView"),
                },
                {
                    path: "/keranjang",
                    name: "KeranjangView",
                    meta: {title: "TRAVELTORIA - Keranjang"},
                    component: importComponent("Views/KeranjangView"),
                },
            ]
        },
        
    ]
})

router.beforeEach((to, from, next) => {
    if(localStorage.getItem("id") != null){
        if(to.name=="LoginPage" || to.name=="RegisterPage"){
            next('')
            document.to.meta.title = "Dashboard"
        }else{
            if(localStorage.getItem("type")!=1){
                //buat customer
                next('')
                document.to.meta.title = "Dashboard"
            }else if(localStorage.getItem("type")!=2){
                //buat maskapai pesawat
                next('')
                document.to.meta.title = "Dashboard"
            }else if(localStorage.getItem("type")!=3){
                //buat maskapai kereta
                next('')
                document.to.meta.title = "Dashboard"
            }else{
                //buat agen bus
                next('')
                document.to.meta.title = "Dashboard"
            }
        }
    }else{
        if(to.name=="DashboardMain" || to.name=="DashboardMain" || to.name=="KeretaView" || to.name=="PesawatView" || to.name=="BusView" || to.name=="ProfileView"){
            next('login')
            document.to.meta.title = "Login Page"
        }
    }
    document.title = to.meta.title
    next()
});

// router.beforeEach((to, from, next) => {
//     if(to.name != "LoginPage" && localStorage.getItem("token") == null && to.name!="RegisterPage" && to.name!= "LandingPage"){
//         next('landing')
//         document.to.meta.title = "Landing Page"
//     }

//     document.title = to.meta.title
//     next()
// });

export default router;