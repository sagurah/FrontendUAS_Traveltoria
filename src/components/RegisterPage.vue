<template>
    <v-app>
        <!-- <v-toolbar max-height="65" class="blue lighten-5" flat> -->
            <!-- <v-toolbar-title class="mx-0 blue darken-1" style="padding: 5px; color: white;"><router-link :to="{name: 'LandingPage'}" style="text-decoration: none; color: inherit;" >Travel - X</router-link> </v-toolbar-title> -->
            <!-- <v-toolbar-title class="mx-0 blue darken-1 btn" style="padding: 5px; color: white;" @click="movepage('/')">Travel - X </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar> -->
        <v-content>
            <section>
                <v-row no-gutters class="ma-10" justify="center">
                    <v-col cols="10" sm="6" md="6">
                        <v-card>
                        <v-img height="630" src="https://cdn.pixabay.com/photo/2014/11/06/10/56/airport-519020_960_720.jpg"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="10" sm="6" md="4">
                        <v-card class="pa-1">
                            <v-card-title class="font-weight-bold">Daftar akun baru</v-card-title>
                            <v-card-subtitle>Buat perjalanan anda terasa nyaman dan aktual bersama Traveltoria</v-card-subtitle>
                            <v-container>
                                <label>Nama Anda</label>
                                <v-text-field type="text" label="Name" placeholder="name" solo clearable required></v-text-field>
                                <label>Alamat Email</label>
                                <v-text-field type="text" label="Email" placeholder="email" solo clearable required></v-text-field>
                                <label>Gambar Profil</label>
                                <v-text-field type="file" label="Picture" placeholder="picture"  accept="image/*" class="input-file" solo clearable required></v-text-field>
                                <label>Kata Sandi</label>
                                <v-text-field type="password" label="Password" placeholder="password" solo clearable required></v-text-field>
                            </v-container>
                            <v-card-actions>
                                <v-btn block color="primary" elevation="2" small x-small> Daftar</v-btn>
                            </v-card-actions>
                            <v-card-subtitle>Sudah memiliki akun?<v-btn @click="movepage('/login')" plain color="#00008B" small x-small text>Masuk</v-btn> </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </section>
        </v-content>
    </v-app>
</template>
<script>
  export default {
    data () {
      
    },
    setup() {

    },
    methods: {
        movepage(link) {
            this.$router.push(link) 
            window.location.reload()
        }
    }
}
</script>
<style>
*{
    font-family: 'Montserrat';
}
</style>