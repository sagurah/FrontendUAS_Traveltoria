<template>
    <v-main>
        <v-container>
            <v-card width="600" class="mx-auto px-3 rounded-b-xl mt-4" elevation="3" color="teal lighten-5">
                <v-card-title class="mx-2">
                    <span>
                        <strong>Cari Pesawat</strong>
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
                                <v-text-field required outlined color="teal" v-model="form.kelas" label="Kelas" prepend-inner-icon="mdi-account-badge"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                    <v-card-actions>
                        <v-btn large width="60%" class="mx-auto" color="teal">
                            <span class="text-button">Search</span>
                        </v-btn>
                        <v-btn large width="30%" class="mx-auto ml-2" color="blue darken-3" @click="showAll">
                            <span class="text-button">Lihat Semua</span>
                        </v-btn>
                    </v-card-actions>
                </v-container>
                <v-dialog v-model="dialogShow" width="450">
                    <v-card elevation="3" style="border-radius: 5px;">
                        <v-card-title>
                            <span class="mx-auto my-1">List Pesawat</span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-content>
                            <div v-for="(item, i) in test" :key="i">
                                <v-card outlined class="mx-2 my-4 pa-1" color="teal lighten-5">
                                    <v-card-title>
                                        <span class="my-1" style="font-size: 80%;"><strong>{{item.name}}</strong></span>
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-content>
                                        <v-row class="mx-1 mt-2 mb-0">
                                            <v-col>
                                                <v-text-field rounded outlined readonly v-model="item.asal" max-width="50%" label="Asal"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field rounded outlined readonly v-model="item.tujuan" max-width="50%" label="Tujuan"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mx-1 mt-0">
                                            <v-col>
                                                <v-text-field rounded outlined readonly v-model="item.kelas" max-width="100%" label="Kelas"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mx-1 mb-0">
                                            <v-col>
                                                <v-text-field rounded outlined readonly v-model="item.jadwalBerangkat" max-width="50%" label="Jadwal Berangkat"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field rounded outlined readonly v-model="item.jadwalTiba" max-width="50%" label="Jadwal Tiba"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-card-content>
                                    <v-card-actions>
                                        <v-btn small width="100%" class="mt-0" color="teal" style="color: white;">Pesan Sekarang</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </v-card-content>
                    </v-card>
                </v-dialog>
            </v-card>
        </v-container>
    </v-main>
</template>
<script>
export default{
    data(){
        return{
            dialogShow: false,
            temp: '',
            form: {
                asal: '',
                tujuan: '',
                tanggal: '',
                kelas: '',
            },
            test: [
                {
                    name: 'Garuda 09TFXL3',
                    asal: 'Surabaya',
                    tujuan: 'Yogyakarta',
                    kelas: 'Eksekutif',
                    jadwalBerangkat: '03/06/2003; 19:00',
                    jadwalTiba: '03/06/2003; 20:00'
                },
                {
                    name: 'Citilink 09HJ5L3',
                    asal: 'Balikpapan',
                    tujuan: 'Yogyakarta',
                    kelas: 'Ekonomi',
                    jadwalBerangkat: '03/06/2003; 19:00',
                    jadwalTiba: '03/06/2003; 20:00'
                }
            ]
        }
    },
    methods: {
        swapVal(){
            this.temp = this.form.asal
            this.form.asal = this.form.tujuan
            this.form.tujuan = this.temp
        },
        showAll(){
            this.dialogShow = true
        },
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