<template>
    <v-main>
        <v-container>
            <v-card width="600" class="mx-auto px-3 rounded-b-xl mt-4" elevation="3" color="teal lighten-5">
                <v-card-title class="mx-2">
                    <span>
                        <strong>Cari Kereta</strong>
                    </span>
                </v-card-title>
                <v-divider class="mx-6" color="teal"></v-divider>
                <v-container class="mt-3">
                    <v-form ref="form">
                        <v-row>
                            <v-col>
                                <v-text-field required v-model="form.asal" outlined color="teal" label="Asal" prepend-inner-icon="mdi-airplane-takeoff"></v-text-field>
                            </v-col>
                            <v-col cols="2" class="mt-3 ml-1 mr-0">
                                <v-chip color="teal" @click="swapVal">
                                    <v-icon class="mx-auto" large color="white">mdi-swap-horizontal</v-icon>
                                </v-chip>
                            </v-col>
                            <v-col>
                                <v-text-field required outlined v-model="form.tujuan" color="teal" label="Tujuan" prepend-inner-icon="mdi-airplane-landing"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col>
                                <v-text-field required outlined v-model="form.tanggal" color="teal" label="Tanggal" prepend-inner-icon="mdi-calendar"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field required outlined color="teal" v-model="form.jumlah" label="Jumlah Penumpang" prepend-inner-icon="mdi-account-badge"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                    <v-card-actions>
                        <v-btn large width="250" class="mx-auto" color="teal">
                            <span class="text-button">Search</span>
                        </v-btn>
                    </v-card-actions>
                </v-container>
            </v-card>
        </v-container>
    </v-main>
</template>
<script>
export default{
    data(){
        return{
            temp: '',
            form: {
                asal: '',
                tujuan: '',
                tanggal: '',
                jumlah: '',
            },
        }
    },
    methods: {
        swapVal(){
            this.temp = this.form.asal
            this.form.asal = this.form.tujuan
            this.form.tujuan = this.temp
        }
    }
}
</script>
<style scoped>
    span{
        color: teal;
    }
    span.text-button{
        color:white;
        font-size: 50%;
    }
</style>