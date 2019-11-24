<template>
    <v-container v-if="loading">
        <div class="progress-circle">
            <v-progress-circular
                indeterminate
                :size="150"
                :width="8"
                color="#50E3C2">
            </v-progress-circular>
        </div>
    </v-container>
    <v-container 
        v-else
        grid-list-xl
        fluid
    >
        <v-layout wrap justify-center>
            <v-flex xs7 sm5 md4 lg4
                v-for="(item, index) in wholeResponse"
                :key="index"
                :align-self-center="true">
                <v-card
                    :height="250"
                    :img="item.snippet.thumbnails.default.url"
                    class="d-flex flex-column"
                >
                    <v-row
                        v-for="n in 6"
                        :key="n"
                    >
                        <v-col
                            v-for="n in 2"
                            :key="n"
                            :cols="n === 1 ? 8 : 4"
                        ></v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="9"
                        >
                            <v-card-subtitle>
                                <h2
                                    class="subtitle"
                                >{{item.snippet.title}}</h2>
                            </v-card-subtitle>
                        </v-col>
                        <v-col
                            cols="3"
                        >
                           <v-card-actions class="align-right">
                                <v-btn icon
                                    @click="singleVideo(item.contentDetails.videoId)"
                                >
                                    <!-- <v-icon v-html="'$vuetify.icons.play'"></v-icon> -->
                                    <v-img src="@/assets/images/play_button.svg"></v-img>
                                </v-btn>
                            </v-card-actions> 
                        </v-col>
                    </v-row>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import axios from 'axios';
//import svg from '@/assets/images/play_button.svg';
 
export default {
  data () {
    return {
      wholeResponse: [],
      error: null,
      loading: true,
      playPath: '<svg width="43px" height="43px" viewBox="0 0 43 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>play_button</title><desc>Created with Sketch.</desc><defs></defs><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="play_button"><g id="Group-2" transform="translate(2.000000, 2.000000)"><polygon id="Triangle" fill="#50E3C2" transform="translate(22.500000, 19.500000) rotate(90.000000) translate(-22.500000, -19.500000) " points="22.5 11 33 28 12 28"></polygon><circle id="Oval" stroke="#50E3C2" stroke-width="2" cx="19.5" cy="19.5" r="19.5"></circle></g></g></g></svg>'
    }
  },
  mounted () {
    axios
        .get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
        .then(response => {
            this.wholeResponse = response.data.items;
            this.loading = false
        })
        .catch(error => {
            this.error = error;
        });
  },
  methods: {
    singleVideo (id) {
      this.$router.push('/video/' + id)
    }
  }
}
</script>
<style scoped>
    .subtitle {
        color: #50E3C2;
    }
</style>