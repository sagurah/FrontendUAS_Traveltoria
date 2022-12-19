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
                            <form @submit.prevent="store">
                                <v-container>
                                    <v-select :items="type" label="Mendaftar Sebagai" dense></v-select>
                                    <label>Nama Anda</label>
                                    <v-text-field type="text" label="Name" name="name" id="name" placeholder="name"  solo clearable required></v-text-field>
                                    <label>Alamat Email</label>
                                    <v-text-field type="text" label="Email" name="email" id="email" placeholder="email" solo clearable required></v-text-field>
                                    <label>Gambar Profil</label>
                                    <v-text-field type="file" label="Picture" name="image" id="image" placeholder="picture"  accept="image/*" class="input-file" solo clearable required></v-text-field>
                                    <label>Kata Sandi</label>
                                    <v-text-field type="password" label="Password" name="password" id="password" placeholder="password" solo clearable required></v-text-field>
                                </v-container>
                                <v-card-actions>
                                    <button type="submit" color="primary" elevation="2" small x-small>Daftar</button>
                                    <v-btn block > Daftar</v-btn>
                                </v-card-actions>
                            </form>
                            <v-card-subtitle>Sudah memiliki akun?<v-btn @click="movepage('/login')" plain color="#00008B" small x-small text>Masuk</v-btn> </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </section>
        </v-content>
    </v-app>
</template>
<script>
import { reactive, ref } from 'vue' 
import axios from 'axios'
  export default {
    data(){
        return{
            type: [
                {
                text:"Customer",
                value: 1   
                },
                {
                text:"Maskapai Penerbangan",
                value: 2   
                },
                {
                text:"Maskapai Kereta",
                value: 3   
                },
                {
                text:"Maskapai Bus",
                value: 4   
                },
            ],
        }
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
        }
    }
}
</script>
<style>
*{
    font-family: 'Montserrat';
}
</style>