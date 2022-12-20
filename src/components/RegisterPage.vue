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
                        <v-img height="615" src="https://cdn.pixabay.com/photo/2014/11/06/10/56/airport-519020_960_720.jpg"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="10" sm="6" md="4">
                        <v-card class="pa-1">
                            <v-card-title class="font-weight-bold">Daftar akun baru</v-card-title>
                            <v-card-subtitle>Buat perjalanan anda terasa nyaman dan aktual bersama Traveltoria</v-card-subtitle>
                            <v-form v-model="valid" ref="form">
                                <v-container>
                                    <v-select :items="type" required v-model="form.tipe" :rules="tipeRules" outlined color="teal" label="Tipe"></v-select>
                                    <label>Nama Anda</label>
                                    <v-text-field type="text" label="Name" placeholder="name" v-model="form.name"  :rules="nameRules" solo clearable required></v-text-field>
                                    <label>Alamat Email</label>
                                    <v-text-field type="text" label="Email" placeholder="email" v-model="form.email" :rules="emailRules" solo clearable required></v-text-field>
                                    <!-- <label>Gambar Profil</label>
                                    <v-text-field type="file" label="Picture" placeholder="picture" v-model="form.type" accept="image/*" class="input-file" solo clearable required></v-text-field> -->
                                    <label>Kata Sandi</label>
                                    <v-text-field type="password" label="Password" placeholder="password" v-model="form.password" :rules="passwordRules" solo clearable required></v-text-field>
                                </v-container>
                                <v-card-actions>
                                    <v-btn block color="primary" elevation="2" small x-small @click="submit">Daftar</v-btn>
                                </v-card-actions>
                            </v-form>
                            <v-card-subtitle>Sudah memiliki akun?<v-btn @click="movepage('/login')" plain color="#00008B" small x-small text>Masuk</v-btn> </v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
                         {{ error_message }}
                    </v-snackbar>
                </v-row>
            </section>
        </v-content>
    </v-app>
</template>
<script>
    export default{
        data () {
        return {
            load: false,
            form: {
                email: '',
                password: '',
                tipe: null,
                name: '',
            },
            type:[
                {text: "Customer", value:1},
                {text: "Maskapai Pesawat", value:2},
                {text: "Maskapai Kereta", value:3},
                {text: "Agen Bus", value:4},
            ],
            snackbar: false,
            valid: false,
            error_message: "",
            nameRules: [(v) => !!v || "Nama tidak boleh kosong"],
            tipeRules: [(v) => !!v || "Tipe tidak boleh kosong"],
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
        submit() {
            if (this.$refs.form.validate()) {
                this.load = true;
                this.$http
                    .post(this.$api + '/registers', {
                        email : this.form.email,
                        password : this.form.password,
                        type: this.form.tipe,
                        name: this.form.name
                    // headers: {
                    // 'Authorization' : 'Bearer ' + localStorage.getItem('token')
                    // }
                }).then((response)=> {
                    // localStorage.setItem("id", response.data.user.id);
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