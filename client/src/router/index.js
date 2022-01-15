import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'
import MovieSearch from '../views/MovieSearch.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Three from '../components/Three.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/movie',
    name: 'Movie Search',
    component: MovieSearch
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  }, 
  {
    path: '/search',
    name: 'Three',
    component: Three
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
