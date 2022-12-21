<template> 
    <v-main>
        <div class="bg">
        <div class="mx-5 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> 
            <h1 class="h2">BUS PAGE</h1> 
        </div> 
        <v-card elevation="3" class="mt-5 mx-6" style="border-radius: 6px;">
            <v-row justify="center" align="center" style="margin:3px auto;">
                <v-col>
                    <v-text-field v-model="search" class="font-weight-bold" color="black" style="width: 70%;font-family: Poppins; font-size: 20px; font-style:bold; border-radius: 10px;" rounded append-icon="mdi-magnify" outlined placeholder="Search..." hide-details></v-text-field>
                </v-col>
                <v-col>
                    <v-btn class="font-weight-bold" style="margin:10px auto;font-family: Poppins; font-size: 20px; text-transform: capitalize; float:right; color: black" x-large color="teal" @click="dialog = true">ADD BUS</v-btn>
                </v-col>
            </v-row>
        </v-card>
        <v-card elevation="3" style="border-radius: 6px;" class="mt-5 mx-6">
            <v-data-table :headers="headers" :items="Buses" :search="search">
                <template v-slot:[`item.kelas`]="{item}">
                    <span v-if="item.kelas==1">Ekonomi</span>
                    <span v-if="item.kelas==2">Bisnis</span>
                    <span v-if="item.kelas==3">Sleeper</span>
                </template>
                <template v-slot:[`item.from_id`]="{item}">
                    <span v-if="item.from_id==1">Yogyakarta</span>
                    <span v-else-if="item.from_id==2">Jakarta</span>
                    <span v-else-if="item.from_id==3">Bandung</span>
                    <span v-if="item.from_id==4">Surabaya</span>
                    <span v-else-if="item.from_id==5">Purwokerto</span>
                    <span v-else-if="item.from_id==6">Solo</span>
                </template>
                <template v-slot:[`item.to_id`]="{item}">
                    <span v-if="item.to_id==1">Yogyakarta</span>
                    <span v-else-if="item.to_id==2">Jakarta</span>
                    <span v-else-if="item.to_id==3">Bandung</span>
                    <span v-if="item.to_id==4">Surabaya</span>
                    <span v-else-if="item.to_id==5">Purwokerto</span>
                    <span v-else-if="item.to_id==6">Solo</span>
                </template>
                <template v-slot:[`item.actions`]="{item}">
                    <v-btn icon small class="mr-2" @click="editHandler(item)">
                        <v-icon color="red">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon small @click="deleteBus(item.id)">
                        <v-icon color="green">mdi-delete</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" width="450">
                    <v-card elevation="3" style="border-radius: 5px;">
                        <v-card-title>
                            <span class="mx-auto my-1">Tambah Bus</span>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-container class="mt-3">
                                <v-card-content>
                                    <v-text-field required v-model="form.name" outlined color="teal" label="Nama Bus"></v-text-field>
                                    <v-row>
                                        <v-col>
                                            <v-select :items="kotas" required v-model="form.asal" outlined color="teal" label="Asal" prepend-inner-icon="mdi-bus"></v-select>
                                        </v-col>
                                        <v-col>
                                            <v-select :items="kotas" required v-model="form.tujuan" outlined color="teal" label="Tujuan" prepend-inner-icon="mdi-bus"></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mt-0">
                                        <v-col>
                                            <v-text-field required outlined readonly v-model="form.tanggalKeberangkatan" @click="dialogDateKeberangkatan = true" color="teal" label="Tanggal Berangkat" prepend-inner-icon="mdi-calendar"></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field required outlined  v-model="form.jamKeberangkatan" color="teal" label="Jam Berangkat" prepend-inner-icon="mdi-calendar"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="mt-0">
                                        <v-col>
                                            <v-text-field required outlined readonly v-model="form.tanggalTiba" @click="dialogDateTiba = true" color="teal" label="Tanggal Sampai" prepend-inner-icon="mdi-calendar"></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field required outlined  v-model="form.jamTiba"  color="teal" label="Jam Sampai" prepend-inner-icon="mdi-calendar"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-select :items="kelas" required outlined color="teal" v-model="form.kelas" label="Kelas" prepend-inner-icon="mdi-account-badge"></v-select>
                                </v-card-content>
                                <v-card-actions class="justify-end">
                                    <v-btn color="#EEEEEE" large style="font-family: Poppins; font-size: 20px; text-transform: capitalize; font-weight: 900; color:#001D38;" @click="closeDialog()"> Cancel </v-btn>
                                    <v-btn color="teal" large style="font-family: Poppins; font-size: 20px; text-transform: capitalize; font-weight: 700; color:#F7CACA;" @click="saveData()"> Save </v-btn> 
                                </v-card-actions>
                        </v-container>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDateKeberangkatan" width="300">
                    <v-date-picker show-current v-model="form.tanggalKeberangkatan">
                        <v-spacer></v-spacer>
                        <v-btn @click="dialogDateKeberangkatan = false" color="red darken-1">
                            <span style="color: white;">Batal</span>
                        </v-btn>
                        <v-btn @click="dialogDateKeberangkatan = false" color="green">
                            <span style="color: white;">Simpan</span>
                        </v-btn>
                    </v-date-picker>
                </v-dialog>
                <v-dialog v-model="dialogDateTiba" width="300">
                    <v-date-picker show-current v-model="form.tanggalTiba">
                        <v-spacer></v-spacer>
                        <v-btn @click="dialogDateTiba = false" color="red darken-1">
                            <span style="color: white;">Batal</span>
                        </v-btn>
                        <v-btn @click="dialogDateTiba = false" color="green">
                            <span style="color: white;">Simpan</span>
                        </v-btn>
                    </v-date-picker>
                </v-dialog>
        </div>
        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
            {{ error_message }}
        </v-snackbar>
    </v-main>
</template> 
<style lang="css">
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.bg {
    background-color: powderblue;
    height: 100vh;
}
    thead tr th span {
        font-size: 160% !important;
        font-family: Poppins !important;
        letter-spacing: 2%;
        font-weight: 600;
        color: black !important;
    }

    tbody tr td{
        font-size: 100% !important;
        font-family: Poppins !important;
        letter-spacing: 2%;
        font-weight: 100;
        color: black !important;
    }

    .textfield{
        font-family: Poppins !important;
        color: black;
    }

    .v-list-item__title{
        font-family: Poppins !important;
        color: black;
    }

</style>
<script>

    export default{
        data(){
            return{
                dialog: false,
                dialogDateKeberangkatan: false,
                dialogDateTiba: false,
                snackbar: false,
                selectedId: '',
                formType: 0, 
                headers: [
                    { text: "Nama", align: "start", sortable: true, value: "name"},
                    { text: "From", value: 'from_id'},
                    { text: "To", value: 'to_id'},
                    { text: "Kelas", value: 'kelas'},
                    { text: "Jadwal Berangkat", value: 'jadwal_keberangkatan'},
                    { text: "Jam Berangkat", value: 'jam_keberangkatan'},
                    { text: "Jadwal Tiba", value: 'jadwal_tiba'},
                    { text: "Jam Tiba", value: 'jam_tiba'},
                    { text: "Action", value:'actions'},
                ],
                Buses: [],
                form: {
                    name: '',
                    asal: '',
                    tujuan: '',
                    tanggalKeberangkatan: '',
                    tanggalTiba: '',
                    jamKeberangkatan: '',
                    jamTiba: '',    
                    kelas: '',
                },
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
            };
        },
        methods: {
            readData(){
                var url = this.$api + '/buses';
                this.$http.get(url, {
                    // headers: {
                    // 'Authorization' : 'Bearer ' + localStorage.getItem('token')
                    // }
                }).then(response => {
                    this.Buses = response.data.data;
                })
            },
            closeDialog() {
                this.dialog = false;
                this.formType = 0;
                this.$refs.form.reset();
            },
            saveData(){
                if(this.formType==0){
                    this.$http.post(this.$api + '/buses', {
                        name : this.form.name,
                        user_id: 3,
                        from_id: this.form.asal,
                        to_id: this.form.tujuan,
                        kelas: this.form.kelas,
                        jadwal_keberangkatan: this.form.tanggalKeberangkatan,
                        jam_keberangkatan : this.form.jamKeberangkatan,
                        jadwal_tiba: this.form.tanggalTiba,
                        jam_tiba : this.form.jamTiba
                    }).then(response => {
                        this.error_message = '\nBerhasil menambahkan bus'
                        // this.snackbar = true
                        this.error_message = response.data.message
                        //  this.color = "green"
                        setTimeout(() => this.isHidden = false, 2000);
                        this.reload()
                    }).catch((error) => {
                        this.error_message = error.response.data.message
                        this.snackbar = true
                        this.color = "red"
                        this.closeDialog()
                    })
                }else{
                    this.$http.post(this.$api + '/buses/'+ this.selectedId, {
                        name : this.form.name,
                        from_id: this.form.asal,
                        to_id: this.form.tujuan,
                        kelas: this.form.kelas,
                        jadwal_keberangkatan: this.form.tanggalKeberangkatan,
                        jam_keberangkatan : this.form.jamKeberangkatan,
                        jadwal_tiba: this.form.tanggalTiba,
                        jam_tiba : this.form.jamTiba
                    })
                    .then(response => {
                        this.formType=0
                        this.error_message = response.data.message;
                        // this.color = "green"
                        // this.clear()
                        // this.snackbar = true;
                        setTimeout(() => this.isHidden = false, 2000);
                        this.reload()
                    })
                    .catch((error)=>{
                        this.formType=0
                        this.error_message = error.response.data.message;
                        this.snackbar = true;
                        this.color = "red"
                        this.closeDialog()
                    });
                }
                
                
                
            },
            reload(){
                setTimeout(() => this.isHidden = false, 2000);
                window.location.reload();
            },
            deleteBus(id){
                this.$http.delete(this.$api + `/buses/${id}`)
                .then(response => {
                    this.error_message = '\nBerhasil menambahkan bus'
                     //this.snackbar = true
                    this.error_message = response.data.message
                    this.reload()
                })
            },
            editHandler(item){
                this.temp1 = 

                this.selectedId = item.id;
                this.formType = 1;
                this.form.name = item.name;
                this.form.jamTiba = item.jam_tiba;
                this.form.jamKeberangkatan = item.jam_keberangkatan;
                this.form.kelas = this.kelas[item.kelas-1].value;
                this.form.tanggalKeberangkatan = item.jadwal_keberangkatan;
                this.form.tanggalTiba = item.jadwal_tiba;
                this.form.asal = this.kotas[item.from_id-1].value;
                this.form.tujuan = this.kotas[item.to_id-1].value;
                this.dialog = true;  
            }
        },
        mounted() {
            if(localStorage.getItem("verified")==0){
                this.$router.push('/verif');
            }
            this.readData();
        },
    }
</script>
    