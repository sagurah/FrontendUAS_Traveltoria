<template>
    <v-app>
        <v-toolbar max-height="65" class="blue lighten-5" flat>
            <v-toolbar-title class="mx-0 blue darken-1" style="padding: 5px; color: white;"><router-link :to="{name: 'LandingPage'}" style="text-decoration: none; color: inherit;" >Travel - X</router-link> </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <section>
                <v-row no-gutters class="ma-15" justify="center">
                    <v-col cols="10" sm="6" md="4">
                        <v-card class="pa-5">
                            <v-card-title class="font-weight-bold">Selamat datang kembali</v-card-title>
                            <v-card-subtitle>Selamat datang kembali! Mohon masukkan detail anda</v-card-subtitle>
                            <v-container>
                                <v-text-field type="text" label="Email" placeholder="email" solo clearable required></v-text-field>
                                <v-text-field type="password" label="Password" placeholder="password" solo clearable required></v-text-field>
                            </v-container>
                            <v-card-actions>
                                <v-btn block color="primary" elevation="2" small x-small> Masuk</v-btn>
                            </v-card-actions>
                            <v-card-subtitle>Belum memiliki akun?<v-btn plain color="#00008B" small x-small text>Daftar</v-btn> </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col cols="10" sm="6" md="6">
                        <v-card>
                        <!-- <v-img height="412" src="https://cdn.pixabay.com/photo/2017/08/01/18/20/sea-2567088_960_720.jpg"></v-img> -->
                            <v-carousel cycle height="412" hide-delimiters show-arrows-on-hover >
                                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                    <v-img height="412" :src=slide></v-img>
                                </v-carousel-item>
                            </v-carousel>
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
      return {
        slides: [
          'https://cdn.pixabay.com/photo/2017/08/01/18/20/sea-2567088_960_720.jpg',
          'https://cdn.pixabay.com/photo/2019/10/01/21/42/caravansary-4519442_960_720.jpg',
          'https://cdn.pixabay.com/photo/2012/02/29/16/14/passenger-plane-19469_960_720.jpg',
          'https://cdn.pixabay.com/photo/2018/11/01/05/33/nature-3787200_960_720.jpg',
        ],
        }
    },
}
</script>
<style>
*{
    font-family: 'Montserrat';
}
</style>