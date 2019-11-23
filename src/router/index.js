import Vue from 'vue';
import VueRouter from 'vue-router';
import VideosList from '@/components/VideosList';
import Video from '@/components/Video';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'VideosList',
        props: true,
        component: VideosList
    },
    {
        path: '/video/:id',
        name: 'Video',
        props: true,
        component: Video
    }
  ]
})