<template>
    <v-app>
        <v-toolbar max-height="65" class="blue lighten-5" flat>
            <v-toolbar-title class="mx-0" style="padding: 5px;">
                <router-link :to="{name: 'LandingPage'}" style="text-decoration: none; color: inherit;" >
                    <img src="@/assets/logo.png" alt="logo" width="150px" class="mt-2">
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat>Contact Us</v-btn>
                <v-btn flat class="blue lighten-3"> <router-link :to="{name: 'LoginPage'}" style="text-decoration: none; color: inherit;" >Sign In</router-link></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <section>
                <v-layout column align-center justify-center>
                        <h1 class="mt-10 mb-2 black--text" style="font-size:50px;">Contact Us</h1>
                        <div style="width:1100px;text-align: justify;">
                        <p class="mb-2 mx-10 black--text" style="font-size:15px;">
                            Kami berbasis di Yogyakarta ( Babarsari ) sebagai layanan pembelian tiket.
                            Kami lebih dari sekadar pembelian tiket travel, kami mendengarkan pelanggan dan berusaha untuk memenuhi harapan mereka. 
                            Kami menciptakan pengalaman yang luar biasa, aman, dan tepat bagi pelanggan kami. Nikmati perjalanan Anda bersama kami. 
                            Untuk menghubungi kami lebih lanjut, silahkan lihat detail dibawah ini
                        </p>
                        </div>
                </v-layout>
            </section>
            <section>
                <v-layout column wrap class="my-5" align-center>
                    <v-row class="mt-1 justify-center">
                        <v-col class="text-center">
                            <v-icon large>mdi-instagram</v-icon>
                            <div class="justify-center">traveltoria</div>
                        </v-col>
                        <v-col class="text-center">
                            <v-icon large>mdi-facebook</v-icon>
                            <div class="justify-center">traveltoria</div>
                        </v-col>
                        <v-col class="text-center">
                            <v-icon large>mdi-twitter</v-icon>
                            <div class="justify-center">@traveltoria</div>
                        </v-col>
                        <v-col class="text-center">
                            <v-icon large>mdi-phone</v-icon>
                            <div class="justify-center">+6289111111111</div>
                        </v-col>
                        <v-col class="text-center">
                            <v-icon large>mdi-email</v-icon>
                            <div class="justify-center">traveltoria5@gmail.com</div>
                        </v-col>
                    </v-row>
                </v-layout>
            </section>
        </v-content>
    </v-app>
</template>
<script>
export default {
    
}
</script>
<style>
*{
    font-family: 'Montserrat';
    scroll-behavior: smooth;
}   
</style>