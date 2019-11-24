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
  <v-container v-else fluid>
    <v-layout 
      wrap
      column
      align-center
    >
      <v-flex xs7 sm9 md9 lg9>
        <v-row>
          <v-col>
            <v-card
              min-width="400"
              color="#0000"
              flat
            >
              <div class="video-container">
                <iframe
                  height="360"
                  width="640"
                  :src="videoLink"
                  frameborder="0"
                  webkitallowfullscreen mozallowfullscreen allowfullscreen
                ></iframe>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              min-width="300"
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
                    label="Back to list"
                    text
                    depressed
                    to="/"
                  >
                    <v-img 
                      src="@/assets/images/back_arrow.svg"
                    ></v-img>
                    <label class="back">Back to List</label>
                  </v-btn>
              </v-card-actions> 
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
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
      loading: true,
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
            this.loading = false;
        })
        .catch(error => {
            this.error = error;
        });
  },
  methods: {},
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
    text-transform: capitalize;
    margin-left: 5px
  }
  .title-text {
    color: #50E3C2;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  .video-container iframe,.video-container object,.video-container embed {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>