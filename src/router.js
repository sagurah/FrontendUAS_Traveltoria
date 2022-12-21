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
            path: "/",
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
            path: "/verif",
            name: "Verification",
            meta: {title: 'Verification Page'},
            component: importComponent("NotVerif")
        },
        {
            path: "/verified",
            name: "Verified",
            meta: {title: 'Verified Page'},
            component: importComponent("VerifiedPage")
        },
        {
            path: "/dashboard",
            component: importComponent("Dashboard/DashboardLayout"),
            children : [
                {
                    path: "/dashboard",
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

//||to.name==""
router.beforeEach((to, from, next) => {
    if(localStorage.getItem("id")==null){
        if(to.name=="DashboardMain" || to.name=="BusView"||to.name=="PesawatView"||to.name=="KeretaView" || to.name=="BusPage"||to.name=="Pesawat Page" || to.name=="Kereta Page" || to.name=="ProfileView" || to.name=="Verification" || to.name=="KeranjangView" || to.name=="Verified"){
            next('login')
            document.to.meta.title = "Login Page"
        }
    }else{  
        if(to.name=="RegisterPage" || to.name=="LoginPage" || to.name=="LandingPage" || to.name=="Verification" || to.name=="Verified" ){
            next('dashboard')
            document.to.meta.title = "DashboardMain"
        }
            if(localStorage.getItem("type")!=1){
                if(to.name=="KeretaView" || to.name=="PesawatView" || to.name=="BusView" || to.name=="KeranjangView"){
                    next('dashboard')
                    document.to.meta.title = "DashboardMain"
                }
            }
            if(localStorage.getItem("type")!=2){
                if(to.name=="Pesawat Page"){
                    next('dashboard')
                    document.to.meta.title = "DashboardMain"
                }
            }
            if(localStorage.getItem("type")!=3){
                if(to.name=="Kereta Page"){
                    next('dashboard')
                    document.to.meta.title = "DashboardMain"
                }
            }
            if(localStorage.getItem("type")!=4){
                if(to.name=="BusPage"){
                    next('dashboard')
                    document.to.meta.title = "DashboardMain"
                }
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