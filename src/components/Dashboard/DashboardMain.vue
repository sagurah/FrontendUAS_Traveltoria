<template>
    <v-main>
        <!-- <h1 class="text font-weight-medium mb-5 text-left">Dashboard</h1> -->

        <v-item-group>
            <v-container>
                <v-row>
                    <v-col v-for="n in 3" :key="n" cols="12" md="4">
                        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                            <v-img
                                height="250"
                                src="https://www.kopelindo.co.id/imgs/files/bisnis/pic_1B69590E32401B78A2D07D32185B0208.png"
                                ></v-img>

                                <v-card-title><strong> TRAVELTORIA </strong></v-card-title>
                                <v-card-text>
                                    <v-row align="center" class="mx-0">
                                        <v-progress-linear
                                            value="90"
                                            height="15"
                                            striped
                                            color="blue"
                                        >
                                            <template v-slot:default="{ value }">
                                                <strong>{{ Math.ceil(value) }}%</strong>
                                            </template></v-progress-linear>
                                        >
                                    </v-row>

                                    <div class="my-4 text-subtitle-1">
                                        One Stop Travel Solution
                                    </div>
                                </v-card-text>

                                <v-divider class="mx-4"></v-divider>

                                <v-card-title>Schedule</v-card-title>

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
        export default {
            data: () => ({
                loading: false,
                selection: 1,
            }),
            mounted(){
                if(localStorage.getItem("verified")==0){
                    this.$router.push('/verif');
                }
            }
        };
    </script>