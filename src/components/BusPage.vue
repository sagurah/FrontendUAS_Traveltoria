<template> 
    <v-app>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> 
            <h1 class="h2">Bus</h1> 
        </div> 
        <div class="container mt-5"> 
        <div class="row"> 
            <div class="col-md-12"> 
                <div class="card border-0 rounded shadow"> 
                    <div class="card-body"> 
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
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
   
    </v-app>
</template> 
<script>
    export default{
        data(){
            return{
                headers: [
                    { text: "Nama", align: "start", sortable: true, value: "name"},
                    { text: "User", value: 'user'},
                    { text: "From", value: 'from_id'},
                    { text: "To", value: 'to_id'},
                    { text: "Action", value:'actions'},
                ],
                Buses: [],
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
