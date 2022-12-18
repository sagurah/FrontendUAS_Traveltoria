<template>
    <v-main>
        <v-container>
            <v-card width="600" class="mx-auto px-5 rounded-b-xl my-4" elevation="3" color="">
                <v-card-title>
                    <span class="mx-auto px-2 py-1" style="color:#1565C0; background-color: #E3F2FD;">
                        <strong>Detail Akun</strong>
                    </span>
                </v-card-title>
                <v-divider class="mx-2" color=""></v-divider>
                <v-card-content>
                    <v-card class="rounded-circle my-6 mx-auto" elevation="6" max-width="120">
                        <!-- nanti diganti pake img dari user -->
                        <v-img class="mx-auto" :src="'http://127.0.0.1:8000/storage/'+user_data.image"></v-img> 
                    </v-card>
                    <div class="">
                        <label>Nama Anda</label>
                        <v-text-field type="text" label="Name" placeholder="name" v-model="name" solo clearable required></v-text-field>
                        <label>Alamat Email</label>
                        <v-text-field type="text"   label="Email" placeholder="email" v-model="email" solo clearable required></v-text-field>
                        <label>Gambar Profil</label>
                        <v-file-input type="file"  @change="uploadImage" ref="file" id="picture" name="picture" label="Picture" placeholder="picture" accept="image/jpeg,image/jpg,image/png" solo clearable required></v-file-input>
                        <label>Kata Sandi</label>
                        <v-text-field type="password" :rules="passwordRules"  label="Password" placeholder="password" v-model="password" solo clearable required></v-text-field>
                        <label>Tipe</label>
                        <v-text-field type="text"  :rules="typeRules" label="Type" placeholder="type" v-model="type" solo clearable required></v-text-field>
                        <v-btn class="mb-4" color="yellow">
                            <span style="color:black;">Batal</span>
                        </v-btn>
                        <v-btn class="mb-4 mx-2" color="green">
                            <span style="color:white;">Simpan Perubahan</span>
                        </v-btn>    
                    </div>
                </v-card-content>
            </v-card>
        </v-container>
        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
        {{ error_message }}
         </v-snackbar>
    </v-main>
</template>
<script>
export default{
    data(){
        return{
            tempImg: 'https://cdn.pixabay.com/photo/2017/11/15/20/49/head-2952533_960_720.png',
            user_data: [],
            name: "",
            password: "",
            email: "",
            type: "",
            name_type:"", 
            image: null,
            picture: "",

            snackbar: false,
            error_message: "",

        };
    },
    methods: {
         uploadImage(e){
            let files = e;
            console.log(files);    
            this.picture = files;    
        },
        readDataUSer() {
            this.$http.get(this.$api + '/user/'+ localStorage.getItem('id'))
            .then(response => {
                this.user_data = response.data.data;
                this.name = response.data.data.name;
                this.email = response.data.data.email;
                this.password = response.data.data.password;
                this.type = response.data.data.type;
            }).catch(error => {
                console.log(error)
            })
        },
    },
    mounted() {
        this.readDataUSer();
    }
}
</script>
<style></style>
