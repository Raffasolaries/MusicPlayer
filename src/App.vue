<template>
  
    <v-app id="background">

        <v-app-bar app absolute src="@/assets/images/header_bg.png" align="left">
          <v-img
            class="logo"
            src="@/assets/images/MusicPlay_logo.png"
            max-width="350"
          ></v-img>
        </v-app-bar>
        <div class="divide"></div>
      
        <router-view></router-view>

    </v-app>

</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {},
  props: {
  },
  data: () => ('async', {
    // itemsPerPageOptions: [4, 8, 12],
    image: './assets/images/main_bg.png',
    totalItems: 0,
    itemsPerPage: 0,
    items: []
  })
};
</script>
<style>
  .logo {
    margin-top: 4rem
  }
  .divide {
    margin-bottom: 7rem
  }
  #background {
    background-image: url('./assets/images/main_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
