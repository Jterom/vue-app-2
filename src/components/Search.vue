<template>
  <div class='search'>
    <h1>Recherchez un films</h1>
    <input type='text' v-model='query' @keyup='getResult(query)'>
    <div v-for='result in results' :key='result.id'>
      <p>{{result.title}}</p>
      <p>{{result.id}}</p>
      <br>
      <router-link class="Show" :to="`/Detail/${result.id}`">Détail</router-link>
      <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'search',
    data () {
      return {
        query: '',
        results: ''
      }
    },
    methods: {
      getResult(query) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=1def7fe231547d1124aaf23ed94d0a24&query=' + query)
                .then(response => {
                  this.results = response.data.results
                })
        console.log(this.results)
      }
    }
  }
</script>