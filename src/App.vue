<template>
  <v-app class="container">
    
    <!-- <v-navigation-drawer app>

    </v-navigation-drawer> -->

    <v-app-bar app absolute src="@/assets/images/header_bg.png" align="left">
      <v-img
        class="logo"
        src="@/assets/images/MusicPlay_logo.png"
        max-width="350"
      ></v-img>
    </v-app-bar>
    <div class="divide"></div>
    <router-view></router-view>

    <!-- Sizes your content based upon application components -->
    <!-- <v-content>

      <v-container fluid>
        <v-data-iterator
          :items="items"
          :disable-pagination="true"
          :disable-sort="true"
          :loading="true"
          :loading-text="'Loading in progress...'"
        >
          <template v-slot:default="props">
            <v-row>
              <v-col
                :v-for="item in items"
                :key="item.id"
                :cols="3"
              >
                <v-card
                  :hover="true"
                  :img="item.snippet.thumbnails.default.url"
                >
                  <v-card-title><h4>{{ item.snippet.title }}</h4></v-card-title>
                  <v-divider></v-divider>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-container>
    </v-content> -->

    <!-- <v-footer app>

    </v-footer> -->
  </v-app>
  <!-- <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld';
/* import axios from 'axios';

export default {
  name: 'App',

  components: {},
  props {
    
  },
  data: () => ('async', {
    // itemsPerPageOptions: [4, 8, 12],
    totalItems: 0,
    itemsPerPage: 0,
    items: []
  }),

  mounted () {
    this.pending = true;
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
      .then(res => {
        this.items = res.data.items;
        this.totalItems = res.data.totalResults;
        this.itemsPerPage = res.data.pageInfo.resultsPerPage;
      })
      .catch(function(error) { this.error = error })
      .finally(function () { this.pending = false });
  }
}; */
</script>
<style>
  .logo {
    margin-top: 4rem
  }
  .divide {
    margin-bottom: 7rem
  }
  .container {
    background-image: url('./assets/images/main_bg.png')
  }
</style>
