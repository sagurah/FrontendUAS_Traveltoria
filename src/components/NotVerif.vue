<template>
    <v-card-actions>
        <v-btn @click="refresh">Sudah</v-btn>
        <v-btn color="red" style="color:white;" @click="btnlogout">Logout</v-btn>
    </v-card-actions>
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