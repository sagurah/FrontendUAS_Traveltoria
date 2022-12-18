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
                        <v-img class="mx-auto" :src="tempImg" width="100"></v-img> 
                    </v-card>
                    <div class="">
                        <v-text-field outlined class="mt-4" label="Username"></v-text-field>
                        <v-text-field outlined class="" label="Password"></v-text-field>
                        <v-text-field outlined class="" label="Email"></v-text-field>
                        <v-text-field outlined class="" label="Tipe" items=""></v-text-field>  
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
    </v-main>
</template>
<script>
export default{
    data(){
        return{
            tempImg: 'https://cdn.pixabay.com/photo/2017/11/15/20/49/head-2952533_960_720.png'
        }
    }
}
</script>
<style></style>
