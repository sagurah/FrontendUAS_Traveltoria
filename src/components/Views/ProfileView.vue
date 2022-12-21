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
                    <div class="">
                        <v-form v-model="valid" ref="form">
                            <label>Nama Anda</label>
                            <v-text-field type="text" label="Name" placeholder="name" v-model="form.name" :rules="nameRules" solo clearable required></v-text-field>
                            <label>Alamat Email</label>
                            <v-text-field type="text" label="Email" placeholder="email" v-model="form.email" :rules="emailRules" solo clearable required></v-text-field>
                            <label>Kata Sandi</label>
                            <v-text-field type="password" label="Password" placeholder="password" v-model="form.password" :rules="passwordRules" solo clearable required></v-text-field>
                            <v-btn class="mb-4" color="yellow" flat to="/">
                                <span style="color:black;">Batal</span>
                            </v-btn>
                            <v-btn class="mb-4 mx-2" color="green" @click="updateDataUser">
                                <span style="color:white;">Simpan Perubahan</span>
                            </v-btn> 
                        </v-form>   
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
            form: {
                email: '',
                password: '',
                tipe: null,
                name: '',
            },
            snackbar: false,
            error_message: "",
        };
    },
    methods: {
        readDataUSer() {
            this.$http.get(this.$api + '/users/'+ localStorage.getItem('id'))
            .then(response => {
                this.user_data = response.data.data;
                this.form.name = response.data.data.name;
                this.form.email = response.data.data.email;
            }).catch(error => {
                this.error_message = error.response.data.message;
                console.log(error)
            })
        },
        updateDataUser() {
            if(this.$refs.form.validate()) {
                this.$http.post(this.$api + '/users/'+ localStorage.getItem('id'), {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password
                })
                .then(response => {
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
    },
    mounted() {
        if(localStorage.getItem("verified")==0){
            this.$router.push('/verif');
        }
        this.readDataUSer();
    }
}
</script>
<style></style>
