<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green" accent-4 dark dismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <input type="text" v-model="search" placeholder="Search Character" />
    <v-row no-gutters>
     <v-col sm="4" class="pa-3" v-for="post in filteredSearch" :key="post.title._id">
      <v-card class="pa-1" :to="{name: 'post', params: {id: post._id}}">
        <v-img height="250" :src="`/${post.image}`"></v-img>
        <v-btn class="ml-4 mt-3" small outlined color="indigo">
          {{ post.category }}
        </v-btn>
      <v-card-title class="headline">
        {{ post.title }}
        <br/>
        {{ post.real }}
      </v-card-title>
      <v-card-text class="py-0">
      <p>{{ post.content.substring(0, 100)+ "..."}}</p>
      </v-card-text>
      </v-card>
     </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
  export default {
    name: 'Home',
    // create a lifecycle method
    data() {
      return {
       posts: [],
       search: "",
      };
    },
    async created(){
      this.posts = await API.getAllPost();
    },
    computed: {
      filteredSearch: function() {
        return this.posts.filter((post) => {
          return post.title.toLowerCase().match(this.search)
        })
      }
    }
  };
</script>
<style>
input {
  float: center;
  display: block;
  color: black;
  text-align: left;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
input[type=text] {
  float: center;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
</style>