<template>
    <v-app>
        <v-toolbar max-height="65" class="blue lighten-5" flat>
            <v-toolbar-title class="mx-0" style="padding: 5px;">
                <img src="@/assets/logo.png" alt="logo" width="150px" class="mt-2">
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat>Contact Us</v-btn>
                <v-btn flat class="blue lighten-3"> <router-link :to="{name: 'LoginPage'}" style="text-decoration: none; color: inherit;" >Sign In</router-link></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <section>
                <v-parallax src="https://images.unsplash.com/photo-1669935874092-f2632a30c89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" height="800">
                    <v-layout column align-center justify-center>
                        <h1 class="mb-2 white--text" style="font-size:50px; text-shadow: 3px 2px #000000;">Layanan travel terbaik se-nusantara</h1>
                        <h1 class="mb-2 white--text" style="font-size:25px; text-shadow: 3px 2px #000000;">Travel - X</h1>
                        <v-btn large class="mt-10 blue lighten-3" href="#produk">
                            <v-icon left black>mdi-login-variant</v-icon>
                            Mulai Menjelajahi
                        </v-btn>
                    </v-layout>
                </v-parallax>
            </section>

            <section id="produk">
                <v-layout column wrap class="my-5" align-center>
                    <div class="text-xs-center mt-10">
                        <span class="headline"><b>Eksplor Produk Kami</b></span>
                    </div>
                    <v-row class="mt-1 justify-center">
                        <v-col v-for="(item, i) in cardContent" :key="i">
                            <v-card width="400">
                                <v-img width="400" height="400" :src="item.img"></v-img>
                                <v-card-title><b>{{item.judul}}</b></v-card-title>
                                <v-card-text>
                                    {{item.deskripsi}}
                                </v-card-text>
                                <v-card-actions>
                                    <v-chip @click="dialogLearn = true" color="blue darken-3" style="color:white;" elevation="3">Learn More</v-chip>
                                </v-card-actions>
                            </v-card>
                            <v-dialog transition="dialog-top-transition" max-width="400" v-model="dialogLearn">
                                <v-card class="mx-auto" max-width="374">
                                    <v-img height="250" src="https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_960_720.jpg"></v-img>
                                    <v-card-title>Layanan Travel</v-card-title>
                                    <v-card-text>
                                        <div class="mt-1 text-subtitle-1">
                                            Pesawat | Kereta | Bus
                                        </div>
                                    <div>Tersedia 3 layanan yang dapat dipesan sesuai kebutuhan.</div>
                                    </v-card-text>
                                    <v-card-actions>
                                    <v-btn color="blue darken-3 white--text" @click="dialogLearn = false">
                                        Back
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-layout>
            </section>
        </v-content>
        <v-footer padless>
            <v-col class="text-center blue lighten-5" cols="15">{{new Date().getFullYear()}} | Made with 💗 by <strong>Kelompok-X</strong></v-col>
        </v-footer>
    </v-app>
</template>
<script>
export default {
    name: "LandingPage",
    data() {
        return {
            dialogLearn : false,
            cardContent: [
                {
                    judul: 'Kereta',
                    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor tempus, euismod sem nec, porta turpis. Aliquam erat volutpat. Nullam velit eros, feugiat eget est sit amet, lacinia faucibus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eros lorem, placerat eu tortor.',
                    img: 'https://cdn.pixabay.com/photo/2015/06/03/23/48/train-797072_960_720.jpg'
                },
                {
                    judul: 'Pesawat',
                    img: 'https://cdn.pixabay.com/photo/2022/08/02/01/12/airplane-7359232_960_720.jpg',
                    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor tempus, euismod sem nec, porta turpis. Aliquam erat volutpat. Nullam velit eros, feugiat eget est sit amet, lacinia faucibus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eros lorem, placerat eu tortor.'
                },
                {
                    judul: 'Bus',
                    img: 'https://cdn.pixabay.com/photo/2022/11/16/07/58/traffic-7595395_960_720.jpg',
                    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor tempus, euismod sem nec, porta turpis. Aliquam erat volutpat. Nullam velit eros, feugiat eget est sit amet, lacinia faucibus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eros lorem, placerat eu tortor.'
                },
            ]
        }
    }
}
</script>
<style>
*{
    font-family: 'Montserrat';
    scroll-behavior: smooth;
}   
</style>