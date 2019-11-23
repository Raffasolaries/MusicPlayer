<template>
  <v-container fluid>
    <v-layout wrap justify-center>
      <v-flex xs7 sm10 md10 lg10

      >
        <!-- <h2>welcome to single movie component</h2>
          <div>{{singleVideo}}</div> -->

          <!-- <v-card
            
          > -->
            <v-row>
              <v-col>
                <v-card
                  color="#0000"
                  flat
                >
                  <iframe
                    height="360"
                    width="640"
                    :src="videoLink"
                    frameborder="0"
                  ></iframe>
                <!-- <youtube 
                  :video-id="videoId" 
                  ref="youtube"
                  
                  :resize="true"
                ></youtube> -->
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  color="#0000"
                  flat
                >
                  <v-card-title 
                    primary-title
                    class="title-text">
                    {{ singleVideo.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    Published on {{ publishedOn }}
                  </v-card-subtitle>
                  <v-card-text>
                    {{ singleVideo.description }}
                  </v-card-text>
                  <v-card-actions>
                      <v-btn
                        color="#0000"
                        depressed
                        @click="$router.go(-1)"
                      >
                        <v-img 
                          src="@/assets/images/back_arrow.svg"
                        ></v-img>
                        <div class="back">Back to list</div>

                          <!-- <v-icon v-html="'$vuetify.icons.play'"></v-icon> -->
                          <!-- <v-row>
                            <v-col>
                              <v-img 
                                src="@/assets/images/back_arrow.svg"
                              ></v-img>
                            </v-col>
                            <v-col class="back">
                              Back
                            </v-col>
                          </v-row> -->
                      </v-btn>
                  </v-card-actions> 
                </v-card>
              </v-col>
            </v-row>
          <!-- </v-card> -->
            <!-- <v-row

            >
              <v-col
                :cols="8"
              >
                
              </v-col>
              <v-col
                :cols="4"
              >Lorem ipsum</v-col>
            </v-row> -->
          <!-- </v-card> -->
      </v-flex>
      <!-- <v-flex xs6 sm6 md6 lg6
        class="infos"
      >
        <v-card
            :height="360"
            :width="540"
            class="d-flex flex-column"
        >

        </v-card>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
import moment from 'moment'

export default {
  props: ['id'],
  data () {
    return {
      singleVideo: null,
      videoLink: 'http://www.youtube.com/embed/'+this.id,
      publishedOn: '',
      videoId: this.id,
      error: null,
      done: false,
      tag: document.createElement('script'),
      firstScriptTag: document.getElementsByTagName('script')[0]
    }
  },
  mounted () {
    axios
        .get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+this.id+'&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
        .then(response => {
            this.singleVideo = response.data.items[0].snippet;
            this.publishedOn = moment(this.singleVideo.publishedAt).format('MMMM Do YYYY');
            this.loading = false
        })
        .catch(error => {
            this.error = error;
        });
  },
  methods: {
    /* onYouTubeIframeAPIReady() {
      this.player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    },
    onPlayerReady(event) {
      event.target.playVideo();
    },
    onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !this.done) {
        setTimeout(stopVideo, 6000);
        this.done = true;
      }
    },
    stopVideo() {
      this.player.stopVideo();
    } */
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
}
</script>
<style scoped>
  .infos {
    margin: 0 0 0 10px
  }
  .back {
    color: #50E3C2;
    margin-left: 5px
  }
  .title-text {
    color: #50E3C2;
  }
</style>