<template>
    <v-app>
        <v-toolbar max-height="65" class="blue lighten-5" flat>
            <v-toolbar-title class="mx-0" style="padding: 5px;">
                <router-link :to="{name: 'LandingPage'}" style="text-decoration: none; color: inherit;">
                    <img src="@/assets/logo.png" alt="logo" width="150px" class="mt-2">
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <section>
                <v-row no-gutters class="ma-15" justify="center" align="center">
                    <v-col cols="10" sm="6" md="4">
                        <v-card class="pa-5">
                            <v-form v-model="valid" ref="form">
                                <v-card-title class="font-weight-bold">Selamat Akunmu Sudah Aktif</v-card-title>
                                <v-card-subtitle>Mohon masukkan detail anda</v-card-subtitle>
                                <v-container>
                                    <v-text-field type="text" label="Email" placeholder="email" v-model="form.email" :rules="emailRules" solo clearable required></v-text-field>
                                    <v-text-field type="password" label="Password" placeholder="password" v-model="form.password" :rules="passwordRules"  solo clearable required></v-text-field>
                                </v-container>
                                <v-card-actions>
                                    <v-btn block color="primary" elevation="2" small x-small @click="loginSubmit"> Masuk</v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-col>
                    <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
                         {{ error_message }}
                    </v-snackbar>
                    <v-col cols="10" sm="6" md="6">
                        <v-card>
                        <!-- <v-img height="412" src="https://cdn.pixabay.com/photo/2017/08/01/18/20/sea-2567088_960_720.jpg"></v-img> -->
                            <v-carousel cycle height="358" hide-delimiters show-arrows-on-hover >
                                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                    <v-img height="358" :src=slide></v-img>
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
            form: {
                email: '',
                password: '',
            },
            slides: [
            'https://cdn.pixabay.com/photo/2017/08/01/18/20/sea-2567088_960_720.jpg',
            'https://cdn.pixabay.com/photo/2019/10/01/21/42/caravansary-4519442_960_720.jpg',
            'https://cdn.pixabay.com/photo/2012/02/29/16/14/passenger-plane-19469_960_720.jpg',
            'https://cdn.pixabay.com/photo/2018/11/01/05/33/nature-3787200_960_720.jpg',
            ],
            snackbar: false,
            valid: false,
            error_message: "",
            emailRules: [(v) => !!v || "E-mail tidak boleh kosong dan format harus valid"],
            passwordRules: [(v) => !!v || "Password tidak boleh kosong"],
          
        };
    },
    setup() {

    },
    methods: {
        movepage(link) {
            this.$router.push(link) 
            this.window.location.reload()
        },
        loginSubmit() {
            if (this.$refs.form.validate()) {
                var url = this.$api + '/logins';
                this.$http.post(url, {
                    email : this.form.email,
                    password : this.form.password,
                }).then((response)=> {
                    localStorage.setItem("id", response.data.data.id);
                    localStorage.setItem("type", response.data.data.type);
                    localStorage.setItem("verified", response.data.data.verif);
                    this.error_message = response.data.message;
                    this.color = "green"
                    this.clear()
                    this.snackbar = true;
                    this.$router.push({
                        name: "DashboardMain",
                    });
                })
                .catch((error)=>{
                    this.error_message = error.response.data.message;
                    this.snackbar = true;
                    this.color = "red"
                });
            }
            
        },
        clear() {
            this.$refs.form.reset();
        },
    }
}
</script>
<style>
*{
    font-family: 'Montserrat';
}
</style>