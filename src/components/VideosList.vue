<template>
    <Loading v-if="loading"/>
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
                    :img="item.snippet.thumbnails.high.url"
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
import Loading from './Loading.vue';
 
export default {
    name: 'VideosList',
    components: {
        Loading
    },
    data () {
        return {
            wholeResponse: [],
            error: null,
            loading: true
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