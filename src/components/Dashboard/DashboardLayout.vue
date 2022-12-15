<template>
    <div>
        <v-navigation-drawer app v-model="drawer" width="16%" color="blue lighten-5" hide-overlay>
            <v-list-item>
                <v-list-item-content>
                    <v-img :src="require('@/assets/logo.png')" style="filter: drop-shadow(3px 2px 5px #00897B);" contain max-height="90"></v-img>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list nav>
                <v-list-item class="my-2" v-for="menu in menus" :key="menu.title" link tag="router-link" :to="menu.to">
                    <v-list-item-icon>
                        <v-icon color="teal darken-3">{{ menu.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title style="color:#26A69A; font-size: 120%; font-weight: 600;">{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>
                <v-list-item>
                    <v-list-item-content>
                        <!-- <v-list-item-title>test</v-list-item-title> -->
                    </v-list-item-content>
                </v-list-item>
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
            drawer: true,
            menus: [
                { title: 'Kereta', icon: 'mdi-train', to: '/album' },
                { title: 'Pesawat', icon: 'mdi-airplane', to: '/album' },
                { title: 'Bus', icon: 'mdi-bus', to: '/album' },
            ]
        }
    }
}
</script>