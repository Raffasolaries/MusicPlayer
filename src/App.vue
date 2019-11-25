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
/* import VideosList from '@/components/VideosList';
import Video from '@/components/Video';
import App from './App' */

export default {
  name: 'App',
  props: {},
  data: () => ('async', {
    image: './assets/images/main_bg.png'
  })
};
</script>
<style>
  @font-face {
    font-family: Roboto;
    src: url('./assets/fonts/Alfa_Slab_One/AlfaSlabOne-Regular.ttf');
  }
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
