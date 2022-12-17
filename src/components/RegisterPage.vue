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
                        <v-img height="734" src="https://cdn.pixabay.com/photo/2014/11/06/10/56/airport-519020_960_720.jpg"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="10" sm="6" md="4">
                        <v-card class="pa-1">
                            <v-form  v-model="valid" ref="form" enctype="multipart/form-data">
                                <v-card-title class="font-weight-bold">Daftar akun baru</v-card-title>
                                <v-card-subtitle>Buat perjalanan anda terasa nyaman dan aktual bersama Traveltoria</v-card-subtitle>
                                <v-container>
                                    <label>Nama Anda</label>
                                    <v-text-field type="text"  :rules="nameRules" label="Name" placeholder="name" v-model="name" solo clearable required></v-text-field>
                                    <label>Alamat Email</label>
                                    <v-text-field type="text"  :rules="emailRules" label="Email" placeholder="email" v-model="email" solo clearable required></v-text-field>
                                    <label>Gambar Profil</label>
                                    <v-file-input type="file" :rules="imageRules" @change="uploadImage" ref="file" id="picture" name="picture" label="Picture" placeholder="picture" accept="image/jpeg,image/jpg,image/png" solo clearable required></v-file-input>
                                    <label>Kata Sandi</label>
                                    <v-text-field type="password" :rules="passwordRules"  label="Password" placeholder="password" v-model="password" solo clearable required></v-text-field>
                                    <label>Tipe</label>
                                    <v-text-field type="text"  :rules="typeRules" label="Type" placeholder="type" v-model="type" solo clearable required></v-text-field>
                                </v-container>
                                <v-card-actions>
                                    <v-btn block color="primary" elevation="2" small x-small @click="registerSubmit"> Daftar</v-btn>
                                </v-card-actions>
                                <v-card-subtitle>Sudah memiliki akun?<v-btn @click="movepage('/login')" plain color="#00008B" small x-small text>Masuk</v-btn> </v-card-subtitle>
                            </v-form>
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
  export default {
    data () {
        return {
            snackbar: false,
            valid: false,
            error_message: "",
            name: "",
            email: "",
            image: null,
            picture:"",
            password: "",
            type:"",
            nameRules: [(v) => !!v || "Nama tidak boleh kosong"],
            emailRules: [(v) => !!v || "E-mail tidak boleh kosong dan format harus valid"],
            imageRules: [(v) => !!v || "Gambar profil tidak boleh kosong dan format harus gambar"],
            passwordRules: [(v) => !!v || "Password tidak boleh kosong dan format harus valid"],
            typeRules: [(v) => !!v || "Tipe tidak boleh kosong"],
        }
    },
    setup() {

    },
    methods: {
        movepage(link) {
            this.$router.push(link) 
            window.location.reload()
        },
         uploadImage(e){
            let files = e;
            console.log(files);    
            this.picture = files;    
        },
        registerSubmit() {
            const formData = new FormData()
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('image',this.picture);
            formData.append('type',this.type);
            if(this.$refs.form.validate()) {
                this.$http
                .post(this.$api + "/register", formData) .then((response)=> {
                    this.error_message = response.data.message;
                    this.color = "green"
                    this.clear()
                    this.snackbar = true;
                    this.$router.push({
                        name: "LoginPage",
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