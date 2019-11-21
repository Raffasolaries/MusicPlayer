<template>
  <v-container class="container">
    <v-layout row wrap>
      <v-flex xs7 sm8 md8 lg8

      >
        <!-- <h2>welcome to single movie component</h2>
          <div>{{singleMovie}}</div> -->

          <v-card
            :height="360"
          >
            <v-row>
              <v-col>
                <youtube 
                  :video-id="videoId" 
                  ref="youtube"
                  height="360"
                  width="540"
                  :resize="true"
                ></youtube>
              </v-col>
              <v-col>
                <v-card-title primary-title>
                  Lorem ippppsium
                </v-card-title>
                <v-card-subtitle>
                  Lorem ipsum
                </v-card-subtitle>
                <v-card-text>
                  Ciao
                </v-card-text>
                <v-card-actions>
                    <v-btn
                      color="00"
                      @click="$router.go(-1)"
                    >
                      <v-img 
                        src="@/assets/images/back_arrow.svg"
                      ></v-img>
                      <div class="back">Back</div>

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
              </v-col>
            </v-row>
          </v-card>
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
// import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      singleMovie: 'https://www.youtube.com/embed/'+this.id,
      videoId: this.id,
      error: null,
      done: false,
      tag: document.createElement('script'),
      firstScriptTag: document.getElementsByTagName('script')[0]
    }
  },
  mounted () {
    this.tag.src = "https://www.youtube.com/iframe_api";
    this.firstScriptTag.parentNode.insertBefore(this.tag, this.firstScriptTag);
  },
  methods: {
    playVideo () {
      this.player.playVideo()
    },
    goBack () {
      window.location.back();
    }
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
  .container {
    background-image: url('../assets/images/main_bg.png')
  }
</style>