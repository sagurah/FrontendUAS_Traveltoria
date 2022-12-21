<template>
    <v-main>
        <v-container>
            <v-card width="900" class="mx-auto mt-4 px-3 rounded-b-xl" elevation="3" color="teal lighten-5">
                <v-card-title>
                    <span class="mx-2" style="color:teal;"><strong>Keranjang Saya</strong></span>
                </v-card-title>
                <v-divider color="teal" class="mx-4"></v-divider>
                <v-card-content>
                    <v-data-table 
                    color="teal lighten-5" 
                    class="my-3 mx-6 elevation-2" 
                    :headers="headers"
                    loading
                    loading-text="Mohon tunggu..."
                    :items="data"
                    item-key="nama"
                    >
                        <template v-slot:[`item.aksi`]="{item}">
                            <v-btn outlined small @click="checkout(item)" color="teal">
                                <v-icon left color="white">mdi-cart</v-icon>
                                <span style="color: white;">Checkout</span>
                            </v-btn>
                            <v-btn outlined small @click="deleteItem(item)" color="teal">
                                <v-icon left color="white">mdi-trashcan</v-icon>
                                <span style="color: white;">Batalkan</span>
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card-content>
                <v-card-actions>
                    <v-btn class="mx-4 mb-2" color="teal">
                        <v-icon left color="white">mdi-cart</v-icon>
                        <span style="color: white;" class="py-2">Checkout semua</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-main>
</template>
<script>
export default{
    data(){
        return{
            headers: [
                {
                    text: "Nama",
                    align: "start",
                    sortable: true,
                    value: "",
                },
                { text: "Asal", value: "" },
                { text: "Kelas", value: "" },
                { text: "Tujuan", value: "" },
                { text: "Jadwal Berangkat", value: ""},
                { text: "Jadwal Tiba", value: ""},
                { text: "Aksi", value: "aksi" },
            ],
            data: [],
            keretas:[],
            pesawats:[],
            buses:[],
        }
    },
    methods:{
        readData(){
            this.$http.get(this.$api + '/ticketKereta', {
            }).then(response => {
                this.data = response.data.data;
            })

            this.$http.get(this.$api + '/ticketBus', {
            }).then(response => {
                this.keretas = response.data.data;
            })

            this.$http.get(this.$api + '/ticketPesawat', {
            }).then(response => {
                this.keretas = response.data.data;
            })
            
        },
    },
    mounted() {
        if(localStorage.getItem("verified")==0){
            this.$router.push('/verif');
        }
        this.clear()
    }
}
</script>