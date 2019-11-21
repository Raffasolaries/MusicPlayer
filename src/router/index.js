import Vue from 'vue';
import VueRouter from 'vue-router';
import MoviesList from '@/components/MoviesList';
import Movie from '@/components/Movie';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'MoviesList',
        props: true,
        component: MoviesList
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        props: true,
        component: Movie
    }
  ]
})