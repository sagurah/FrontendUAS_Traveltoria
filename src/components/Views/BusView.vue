<template>
    <v-main>
        <v-container>
            <v-card width="600" class="mx-auto px-3 rounded-b-xl mt-4" elevation="3" color="teal lighten-5">
                <v-card-title class="mx-2">
                    <span>
                        <strong>Cari Bus</strong>
                    </span>
                </v-card-title>
                <v-divider class="mx-6" color="teal"></v-divider>
                <v-container class="mt-3">
                    <v-form ref="form">
                        <v-row>
                            <v-col>
                                <v-select :items="kotas" required v-model="form.asal" outlined color="teal" label="Asal" prepend-inner-icon="mdi-bus"></v-select>
                            </v-col>
                            <v-col cols="2" class="mt-3 ml-1 mr-0">
                                <v-chip color="teal" @click="swapVal">
                                    <v-icon class="mx-auto" large color="white">mdi-swap-horizontal</v-icon>
                                </v-chip>
                            </v-col>
                            <v-col>
                                <v-select :items="kotas" required outlined v-model="form.tujuan" color="teal" label="Tujuan" prepend-inner-icon="mdi-bus"></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col>
                                <v-text-field required outlined readonly v-model="form.tanggal" @click="dialogDate = true" color="teal" label="Tanggal" prepend-inner-icon="mdi-calendar"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select :items="kelas" required outlined color="teal" v-model="form.kelas" label="Kelas" prepend-inner-icon="mdi-account-badge"></v-select>
                            </v-col>
                        </v-row>
                        <v-col>
                                <v-text-field :items="jumlahPenumpang" required outlined color="teal" v-model="form.jumlahPenumpang" prepend-inner-icon="mdi-account" label="Jumlah Penumpang"></v-text-field>
                        </v-col>
                    </v-form>
                    <v-card-actions>
                        <v-btn large width="60%" class="mx-auto" color="teal">
                            <span class="text-button" @click="readDataSearch" >Search</span>
                        </v-btn>
                        <v-btn large width="30%" class="mx-auto ml-2" color="blue darken-3">
                            <span class="text-button" @click="showAll">Lihat Semua</span>
                        </v-btn>
                    </v-card-actions>
                </v-container>
                <v-dialog v-model="dialogShow" width="450">
                    <v-card elevation="3" style="border-radius: 5px;">
                        <v-card-title>
                            <span class="mx-auto my-1">List Bus</span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-content>
                            <div v-for="(item, i) in Buses" :key="i">
                                <v-card outlined class="mx-2 my-4 pa-1" color="teal lighten-5">
                                    <v-card-title>
                                        <span class="my-1" style="font-size: 80%;"><strong>{{item.name}}</strong></span>
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-content>
                                        <v-row class="mx-1 mt-2 mb-0">
                                            <v-col>
                                                <span v-if="item.from_id==1">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Asal" value="Yogyakarta"></v-text-field>
                                                </span>
                                                <span v-else-if="item.from_id==2">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Asal" value="Jakarta"></v-text-field>
                                                </span>
                                                <span v-else-if="item.from_id==3">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Asal" value="Bandung"></v-text-field>
                                                </span>
                                                <span v-if="item.from_id==4">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Asal" value="Surabaya"></v-text-field>
                                                </span>
                                                <span v-else-if="item.from_id==5">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Asal" value="Purwokerto"></v-text-field>
                                                </span>
                                                <span v-else-if="item.from_id==6">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Asal" value="Solo"></v-text-field>
                                                </span>
                                            </v-col>
                                            <v-col>
                                                <span v-if="item.to_id==1">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Tujuan" value="Yogyakarta"></v-text-field>
                                                </span>
                                                <span v-else-if="item.to_id==2">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Tujuan" value="Jakarta"></v-text-field>
                                                </span>
                                                <span v-else-if="item.to_id==3">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Tujuan" value="Bandung"></v-text-field>
                                                </span>
                                                <span v-if="item.to_id==4">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Tujuan" value="Surabaya"></v-text-field>
                                                </span>
                                                <span v-else-if="item.to_id==5">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Tujuan" value="Purwokerto"></v-text-field>
                                                </span>
                                                <span v-else-if="item.to_id==6">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Tujuan" value="Solo"></v-text-field>
                                                </span>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mx-1 mt-0">
                                            <v-col>
                                                <span v-if="item.kelas==1">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Kelas" value="Ekonomi"></v-text-field>
                                                </span>
                                                <span v-else-if="item.kelas==2">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Kelas" value="Bisnis"></v-text-field>
                                                </span>
                                                <span v-else-if="item.kelas==3">
                                                    <v-text-field rounded outlined readonly max-width="100%" label="Kelas" value="Sleeper"></v-text-field>
                                                </span>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mx-1 mb-0">
                                            <v-col>
                                                <v-text-field rounded outlined readonly v-model="item.jadwal_keberangkatan" max-width="50%" label="Jadwal Berangkat"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field rounded outlined readonly v-model="item.jadwal_tiba" max-width="50%" label="Jadwal Tiba"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-card-content> 
                                    <v-card-actions>
                                        <v-btn small width="100%" class="mt-0" color="teal" style="color: white;" @click="addToCart(item.id)">Pesan Sekarang</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </v-card-content>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDate" width="300">
                    <v-date-picker show-current v-model="form.tanggal">
                        <v-spacer></v-spacer>
                        <v-btn @click="dialogDate = false" color="red darken-1">
                            <span style="color: white;">Batal</span>
                        </v-btn>
                        <v-btn @click="dialogDate = false" color="green">
                            <span style="color: white;">Simpan</span>
                        </v-btn>
                    </v-date-picker>
                </v-dialog>
            </v-card>
            <v-container>
                <!-- tutor grid ke kanan dong wkwkwk -->
                <v-btn fab large color="teal" @click="movepage('/keranjang')">
                    <v-icon color="white">mdi-cart</v-icon>
                </v-btn>
            </v-container>
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
            dialogDate: false,
            dialogShow: false,
            temp: '',
            load: false,
            error_message:"",
            snackbar: false,
            color: "",
            bus_id: null,
            user_id: null,
            form: {
                asal: '',
                tujuan: '',
                tanggal: '',    
                kelas: '',
                jumlahPenumpang: '',
            },
            tempBus: [],
            Buses:[],
            kotas:
            [
                {text: "Yogyakarta", value:1},
                {text: "Jakarta", value:2},
                {text: "Bandung", value:3},
                {text: "Surabaya", value:4},
                {text: "Purwokerto", value:5},
                {text: "Solo", value:6},
            ],
            kelas:
            [
                {text: "Ekonomi", value:1},
                {text: "Bisnis", value:2},
                {text: "Sleeper", value:3}
            ],
        
        }
    },
    methods: {
        movepage(link) {
            this.$router.push(link) 
        },
        swapVal(){
            this.temp = this.form.asal
            this.form.asal = this.form.tujuan
            this.form.tujuan = this.temp
           
        },
        readData(){
            var url = this.$api + '/buses';
            this.$http.get(url, {
                params:{
                    from_id : this.form.asal,
                    to_id : this.form.tujuan,
                    jadwal_keberangkatan : this.form.tanggal,
                    kelas : this.form.kelas,
                    jumlahPenumpang : this.jumlahPenumpang
                }
            }).then(response => {
                this.Buses = response.data.data;
                this.error_message = response.data.message
                this.load =true
                this.user_id = localStorage.getItem('id')
                this.dialogShow = true
                this.snackbar = true
                this.color="green"
            }).catch((error)=>{
                this.error_message = error.response.data.message;
                this.snackbar = true;
                this.color = "red"
            })
        },
        readDataSearch() {
            var url = this.$api + '/buses';
            var params = '?from_id=' + this.form.asal + '&to_id=' + this.form.tujuan + '&jadwal_keberangkatan='+ this.form.tanggal+'&kelas='+ this.form.kelas
            this.$http.get(url + params).then(response => {
                this.Buses = response.data.data
                this.dialogShow = true
                this.error_message = response.data.message
                this.user_id = localStorage.getItem('id')
                this.color = "green";
            }).catch((error) => {
                this.error_message = error.response.data.message;
                this.snackbar = true;
                this.color = "red"
            })
        },
        /* eslint-disable */
        addToCart(busid){
            console.log(this.bus_id)
            this.$http.post(this.$api + '/ticketBus', {
                user_id: this.user_id,
                bus_id: busid,
            }).then(response => {
                this.snackbar = true
                this.error_message = '\nBerhasil menambahkan data ke keranjang'
                this.error_message = response.data.message
                this.color = "green"
                this.dialogShow = false
            }).catch((error) => {
                this.error_message = error.response.data.message
                this.snackbar = true
                this.color = "red"
            })
        },
        /* eslint-disable */
        showAll(){
            this.readData();
        },
        clear() {
            this.$refs.form.reset();
        }
    },
    mounted() {
        if(localStorage.getItem("verified")==0){
            this.$router.push('/verif');
        }
        this.clear()
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