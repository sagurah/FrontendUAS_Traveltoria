<template>
  <v-app>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
  *{
    font-family: 'Montserrat';
  }
</style>
