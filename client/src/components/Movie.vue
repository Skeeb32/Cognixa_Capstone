<template>
  
  <div class="movie">
<v-list-item-title class="text-h5 mb-1">
          {{movie.Title}}
        </v-list-item-title>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

       <img width="200" :alt="altText" :src="movie.Poster" />

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          write
          size="14">
        </v-rating>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         <v-list-item-subtitle>{{movie.Title}}</v-list-item-subtitle>
               <v-list-item-subtitle>{{movie.Year}}</v-list-item-subtitle>
                     <v-list-item-subtitle>{{movie.Type}}</v-list-item-subtitle>
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Want to see a movie near you?</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        v-on:click="myMethod($event)" href="https://www.amctheatres.com/movies" target="_blank"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';
  export default {
    data: () => ({
    show: false,
    }),
    name: "Movie",
    props: ['movie'],
    setup({ movie }) {
      const altText = computed(() => `The movie titled: ${movie.Title}`);
      return { altText };
    }, 
      methods: {
    myMethod: function myMethod(ev) {
      console.log(ev); // MouseEvent { ... }
    }
  }
  };
</script>

