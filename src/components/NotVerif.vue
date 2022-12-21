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
                                <v-card-title class="font-weight-bold">Silahkan Verifikasi Email Terlebih Dahulu </v-card-title>                                
                                <v-card-actions>
                                    <v-btn block color="primary" elevation="2" small x-small @click="refresh">Check</v-btn>
                                </v-card-actions>
                                <v-card-subtitle><v-btn @click="btnlogout"  plain color="#00008B" small x-small text>Kembali </v-btn> </v-card-subtitle>
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
    name: "DashboardLayout",
    methods: {
        refresh(){
            this.$http.get(this.$api + '/users/'+ localStorage.getItem("id"))
            .then(response => {
                if(response.data.data.verif==1){
                    localStorage.setItem("verified", response.data.data.verif);
                    this.$router.push({
                        name: "DashboardMain",
                    });
                }else{
                    window.location.reload();
                }
            }).catch(error => {
                this.error_message = error.response.data.message;
                console.log(error)
            })
        },
        btnlogout(){
            localStorage.removeItem('id');
            localStorage.removeItem('type');
            this.$router.push('/login');
        }
    }
}
</script>