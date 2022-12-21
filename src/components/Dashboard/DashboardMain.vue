<template>
    <v-main>
        <!-- <h1 class="text font-weight-medium mb-5 text-left">Dashboard</h1> -->
        <v-item-group>
            <v-container>
                <v-row class="mt-8 mx-2">
                    <span style="font-weight: 500; font-size:200%;"><strong>Hai!,</strong></span>
                </v-row>
                <v-row class="mx-2">
                    <span style="font-weight: 500; font-size: 120%;">Selamat datang kembali di</span>
                    <span style="font-weight: 500; font-size: 130%; color:white; background-color: teal;" class="px-1 mx-2"><strong>TRAVELTORIA</strong></span>
                </v-row>
                <v-row class="mx-auto mt-6">
                    <v-divider color="teal"></v-divider>
                </v-row>
                <v-row>
                    <v-col v-for="index in menus" :key="index" cols="12" md="4">
                        <v-card class="mx-auto my-3" max-width="374">
                            <v-img
                                height="250"
                                :src="index.img"
                                ></v-img>
                                <v-card-title>
                                    <span class="mt-0"><strong> {{ index.title }} </strong></span>
                                </v-card-title>
                                <v-card-text>
                                    <div class="mt-0 text-subtitle-1">
                                        One Stop Travel Solution
                                    </div>
                                </v-card-text>

                                <v-divider class="mx-4"></v-divider>

                                <v-card-actions>
                                    <v-btn class="mx-2 my-2" color="teal" @click="movepage(index.to)">
                                        <span style="color:white;">Buka Halaman</span>
                                    </v-btn>
                                </v-card-actions>

                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-item-group>
        </v-main>
    </template>
    <style>
        .text {
            font-family: "Franklin Gonthic Medium", "Ariel Narrow", Arial, sans-serif;
        }
    </style>
    <script>
    export default{
        data(){
            return{
                menus: [],
                accountMenus: [
                    {title: 'Halaman Akun', img: 'https://icons.veryicon.com/png/o/miscellaneous/administration/account-25.png', to: '/akun'}
                ],
                keretas: [
                    {title: 'Halaman Kereta', img: 'https://cdn.pixabay.com/photo/2015/06/03/23/48/train-797072_960_720.jpg', to: '/keretas'}
                ],
                pesawats: [
                    {title: 'Halaman Pesawat', img: 'https://cdn.pixabay.com/photo/2022/08/02/01/12/airplane-7359232_960_720.jpg', to: '/pesawats'}
                ],
                buses: [
                    {title: 'Halaman Bus', img: 'https://cdn.pixabay.com/photo/2022/11/16/07/58/traffic-7595395_960_720.jpg', to: '/buses'}
                ],
                users: [
                    {title: 'Halaman Kereta', img: 'https://cdn.pixabay.com/photo/2015/06/03/23/48/train-797072_960_720.jpg', to: '/kereta'},
                    {title: 'Halaman Pesawat', img: 'https://cdn.pixabay.com/photo/2022/08/02/01/12/airplane-7359232_960_720.jpg', to: '/pesawat'},
                    {title: 'Halaman Bus', img: 'https://cdn.pixabay.com/photo/2022/11/16/07/58/traffic-7595395_960_720.jpg', to: '/bus'}
                ]
            }
        }, 
        mounted(){
            if(localStorage.getItem("type")==1){
                this.menus = this.users;
            }
            if(localStorage.getItem("type")==3){
                this.menus = this.keretas;
            }
            if(localStorage.getItem("type")==2){
                this.menus = this.pesawats;
            }
            if(localStorage.getItem("type")==4){
                this.menus = this.buses;
            }
        }, 
        methods: {
            movepage(link) {
                this.$router.push(link) 
            },
        }
    }
    </script>