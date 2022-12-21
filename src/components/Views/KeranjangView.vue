<template>
    <v-main>
        <v-container>
            <v-card width="900" class="mx-auto mt-4 px-3 rounded-b-xl" elevation="3" color="teal lighten-5">
                <v-card-title>
                    <span class="mx-2" style="color:teal;"><strong>Keranjang Saya</strong></span>
                </v-card-title>
                <v-divider color="teal" class="mx-4"></v-divider>
                <v-card-content>
                    <v-combobox
                        v-model="select"
                        :items="searchItem"
                        label="Search"
                        single
                        outlined
                        dense
                    ></v-combobox>
                    <v-data-table 
                    color="teal lighten-5" 
                    class="my-3 mx-6 elevation-2" 
                    :headers="headers"
                    :items="filter"
                    item-key="nama"
                    >
                    
                        <template v-slot:[`item.aksi`]="{item}">
                            <span v-if="item.status=='Dipesan'">
                                <v-btn outlined small @click="checkoutItem(item.id)" color="blue">
                                <v-icon left color="blue">mdi-cart</v-icon>
                                <span style="color: blue;">Checkout</span>
                            </v-btn>
                            <v-btn outlined small @click="deleteItem(item.id)" color="red">
                                <v-icon left color="red">mdi-trashcan</v-icon>
                                <span style="color: red;">Batalkan</span>
                            </v-btn>
                    </span>
                            
                        </template>
                    </v-data-table>
                </v-card-content>
                <v-card-actions>
                    <!-- <v-btn class="mx-4 mb-2" color="teal">
                        <v-icon left color="white">mdi-cart</v-icon>
                        <span style="color: white;" class="py-2">Checkout semua</span>
                    </v-btn> -->
                </v-card-actions>
            </v-card>
        </v-container>
    </v-main>
</template>
<script>
export default{
    data(){
        return{
            select: "Pesawat",
            searchItem: [
                "Pesawat", "Kereta","Bus"
            ],
            headers: [
                { text: "Nama",align: "start", sortable: true, value: "nama"},
                { text: "Asal", value:"asal"},
                { text: "Tujuan", value: "tujuan" },
                { text: "Jadwal Berangkat", value: "jadwal_keberangkatan"},
                { text: "Jadwal Tiba", value: "jadwal_tiba"},
                { text: "Aksi", value: "aksi" },
            ],
            data: [],
            keretas:[],
            pesawats:[],
            buses:[],
        }
    },
    methods:{
        deleteItem(id){
            if(this.select=="Pesawat"){
                this.$http.delete(this.$api + `/ticketPesawats/${id}`)
                .then(response => {
                    this.error_message = '\nBerhasil delete pesawat'
                     //this.snackbar = true
                    this.error_message = response.data.message
                    this.reload()
                })
            }
            if(this.select=="Kereta"){
                this.$http.delete(this.$api + `/ticketKeretas/${id}`)
                .then(response => {
                    this.error_message = '\nBerhasil delete kereta'
                     //this.snackbar = true
                    this.error_message = response.data.message
                    this.reload()
                })
            }
            if(this.select=="Bus"){
                this.$http.delete(this.$api + `/ticketBuses/${id}`)
                .then(response => {
                    this.error_message = '\nBerhasil delete bus'
                     //this.snackbar = true
                    this.error_message = response.data.message
                    this.reload()
                })
            }
            
        },
        checkoutItem(id){
            if(this.select=="Pesawat"){
                this.$http.post(this.$api + `/ticketPesawat/lunas/${id}`)
                .then(response => {
                    this.error_message = '\nBerhasil delete pesawat'
                     //this.snackbar = true
                    this.error_message = response.data.message
                    this.reload()
                })
            }
            if(this.select=="Kereta"){
                this.$http.post(this.$api + `/ticketKereta/lunas/${id}`)
                .then(response => {
                    this.error_message = '\nBerhasil delete kereta'
                     //this.snackbar = true
                    this.error_message = response.data.message
                    this.reload()
                })
            }
            if(this.select=="Bus"){
                this.$http.post(this.$api + `/ticketBus/lunas/${id}`)
                .then(response => {
                    this.error_message = '\nBerhasil delete bus'
                     //this.snackbar = true
                    this.error_message = response.data.message
                    this.reload()
                })
            }
        },
        reload(){
                setTimeout(() => this.isHidden = false, 2000);
                window.location.reload();
            },
    },

    mounted() {
        this.$http.get(this.$api + `/ticketKereta/${localStorage.getItem("id")}`, {
            }).then(response => {
                this.keretas = response.data.data;
            })

            

            this.$http.get(this.$api + `/ticketPesawat/${localStorage.getItem("id")}`, {
            }).then(response => {
                this.pesawats = response.data.data;
            })
            this.$http.get(this.$api + `/ticketBus/${localStorage.getItem("id")}`, {
            }).then(response => {
                this.buses = response.data.data;
            })
        if(localStorage.getItem("verified")==0){
            this.$router.push('/verif');
        }
        this.clear()
    },
    computed:{
        filter(){
            if(this.select=="Pesawat"){
                return this.pesawats
            }
            if(this.select=="Kereta"){
                return this.keretas
            }
            if(this.select=="Bus"){
                return this.buses
            }
            return this.pesawats
        }
        
    }
}
</script>