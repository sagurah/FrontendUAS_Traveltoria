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
                     <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
                         {{ error_message }}
                    </v-snackbar>
                </v-row>
            </section>
        </v-content>
    </v-app>
</template>
<script>
import { reactive, ref } from 'vue' 
import axios from 'axios'
  export default {
    data () {
      
    },
    setup() {
        const user = reactive({ 
            name: '', 
            email: '', 
            image: '',
            password:''
        })

        const validation = ref([])
        function store() { 
            let name = user.name
            let email = user.email
            let image = user.image
            let password = user.password
            let type = 1
            axios.post('http://localhost:8000/api/users', { 
                name: name,
                email: email,
                image: image,
                password: password,
                type: type 
            }).then(() => { 
                this.$router.push('/login') 
                this.window.location.reload()
            }).catch(error => { 
                //assign state validation with error 
                validation.value = error.response.data 
            }) 
        }
        return{
            user,
            validation,
            store
        }

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