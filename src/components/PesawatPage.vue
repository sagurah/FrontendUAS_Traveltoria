<template> 
    <v-main>
        <div class="mx-5 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> 
            <h1 class="h2">Pesawat Page</h1> 
        </div> 
        <v-card elevation="3" class="mt-5 mx-6" style="border-radius: 6px;">
            <v-row justify="center" align="center" style="margin:3px auto;">
                <v-col>
                    <v-text-field v-model="search" class="font-weight-bold" color="black" style="width: 70%;font-family: Poppins; font-size: 20px; font-style:bold; border-radius: 10px;" rounded append-icon="mdi-magnify" outlined placeholder="Search..." hide-details></v-text-field>
                </v-col>
                <v-col>
                    <v-btn class="font-weight-bold" style="margin:10px auto;font-family: Poppins; font-size: 20px; text-transform: capitalize; float:right; color: black" x-large color="teal" @click="dialog = true">ADD PESAWAT</v-btn>
                </v-col>
            </v-row>
        </v-card>
        <v-card elevation="3" style="border-radius: 6px;" class="mt-5 mx-6">
            <v-data-table :headers="headers" :items="Buses" :search="search">
                <template v-slot:[`item.actions`]="{item}">
                    <v-btn icon small class="mr-2" @click="editHandler(item)">
                        <v-icon color="red">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon small @click="deleteHandler(item.id)">
                        <v-icon color="green">mdi-delete</v-icon>
                    </v-btn>
                </template>

                <!-- <template v-slot:[`item.actions`]="{ item }">
                <v-btn small class="mr-2" @click="editHandler(item)"> edit </v-btn>
                <v-btn small @click="deleteHandler(item.id)"> delete </v-btn>
                </template> -->
                </v-data-table>
        </v-card>
    </v-main>
</template> 
<style lang="css">
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

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
                headers: [
                    { text: "Nama", align: "start", sortable: true, value: "name"},
                    { text: "User", value: 'user_id'},
                    { text: "From", value: 'from_id'},
                    { text: "To", value: 'to_id'},
                    { text: "Action", value:'actions'},
                ],
                Buses: [],
            };
        },
        methods: {
            readData(){
                var url = this.$api + '/pesawats';
                this.$http.get(url, {
                    // headers: {
                    // 'Authorization' : 'Bearer ' + localStorage.getItem('token')
                    // }
                }).then(response => {
                    this.Buses = response.data.data;
                })
                },
        },
        mounted() {
            this.readData();
        },
        
    }

    
</script>
    <!--
   
    <script> 
    
    import { onMounted, ref } from 'vue' 
    export default { 
        data(){
            return{
                selectedId : ''
            }
        },
        setup() { 
            //reactive state 
            let buses = ref([]) 
            //mounted 
            onMounted(() => { 
                //get API from Laravel Backend 
                axios.get('http://localhost:8000/api/buses') 
                    .then(response => { 
                        //assign state posts with response data 
                        buses.value = response.data.data }
                        ).catch(error => { 
                            console.log(error.response.data) }) 
                        }) 
                        //return 
                        return { buses } 
                 },
            
                 methods:{
                    deletePegawai(id){
                        let buses = ref([]) 
                        axios.delete(`http://localhost:8000/api/buses/${id}`);
                        axios.get('http://localhost:8000/api/buses') 
                    .then(response => { 
                        //assign state posts with response data 
                        buses.value = response.data.data 
                        location.reload();}
                        ).catch(error => { 
                            console.log(error.response.data) }) 
                        
                               
                 },
                 activate(){
                    setTimeout(() => this.isHidden = false, 10000);
                 }
            
            }
        
        }               
    </script> 
    <style> 
</style> 
-->
