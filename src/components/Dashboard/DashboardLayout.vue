<template>
    <div>
        <v-navigation-drawer app v-model="drawer" width="16%" color="teal lighten-5" hide-overlay>
            <v-list-item>
                <v-list-item-content>
                    <v-card color="teal lighten-5" flat to="/">
                        <v-img :src="require('@/assets/logo.png')" style="filter: drop-shadow(3px 2px 5px #00897B);" contain max-height="90">
                        </v-img>
                    </v-card>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list class="mt-2" nav>
                <v-chip class="mx-3" color="teal" style="color:white;">
                    <span><strong>Menus</strong></span>
                </v-chip>
                <v-list-item class="my-2" v-for="menu in menus" :key="menu.title" link tag="router-link" :to="menu.to">
                    <v-list-item-icon>
                        <v-icon color="teal darken-3">{{ menu.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title style="color:#26A69A; font-size: 120%; font-weight: 600;">{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <div class="mt-16">
                    <v-chip class="mx-3" color="blue darken-3" style="color:white;">
                        <span><strong>Akun</strong></span>
                    </v-chip>
                    <v-list-item class="my-2" v-for="menu in accountMenus" :key="menu.title" link tag="router-link" :to="menu.to">
                        <v-list-item-icon>
                            <v-icon color="blue darken-3">{{ menu.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color:#1565C0; font-size: 120%; font-weight: 600;">{{ menu.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-btn width="100%" small color="red darken-1" style="color:white;" @click="dialogLogout = true">Logout</v-btn>
                        <v-dialog v-model="dialogLogout" transition="dialog-top-transition" max-width="450">
                            <v-card style="border-radius: 5px;">
                                <v-card-title>
                                    <span class="ma-1"><strong>Konfirmasi</strong></span>
                                    <span class="pa-1" style="background-color:#F44336; color:white;"><strong>Logout</strong></span>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text class="mt-2">
                                    <span style="font-weight:600;">Apakah anda yakin untuk melakukan logout?</span>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn @click="dialogLogout=false">Batal</v-btn>
                                    <v-btn color="red" style="color:white;" @click="btnlogout">Logout</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app fixed height="80%" color="#FFFF">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <span style="background-color: #00897B; color:white; padding: 3px; font:arial; font-size:120%;">
                <b>TRAVELTORIA</b>
            </span>
            <span style="padding-left:5px;">One Stop Travel Solution!</span>
        </v-app-bar>
        <div style="min-height: 100vh !important;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardLayout",
    data() {
        return {
            dialogLogout: false,
            drawer: true,
            users: [
                { title: 'Kereta', icon: 'mdi-train', to: '/kereta' },
                { title: 'Pesawat', icon: 'mdi-airplane', to: '/pesawat' },
                { title: 'Bus', icon: 'mdi-bus', to: '/bus' },
            ],
            keretas: [
                { title: 'Kereta', icon: 'mdi-train', to: '/keretas' },
            ],
            buses: [
                { title: 'Bus', icon: 'mdi-bus', to: '/buses' },
            ],
            pesawats: [
                { title: 'Pesawat', icon: 'mdi-bus', to: '/pesawats' },
            ],
            menus: [],

            accountMenus: [
                { title: 'Akun Saya', icon: 'mdi-account', to: '/akun' },
            ]
        }
    },
    mounted(){
        if(localStorage.getItem("type")==1){
            this.menus = this.users;
        }
        if(localStorage.getItem("type")==3){
            this.menus = this.keretas;
        }
        if(localStorage.getItem("type")==2){
            this.menus = this.pesawats;
        }
        if(localStorage.getItem("type")==4){
            this.menus = this.buses;
        }
        
        
        // if(localStorage.getItem("Type")==1){
        //     let copy = JSON.parse(JSON.stringify(this.users));
        //     this.menus = this.users;
        // }
    },
    methods: {
        btnlogout(){
            localStorage.removeItem('id');
            localStorage.removeItem('type');
            this.$router.push('/login');
        }
    }
}
</script>