<template>
    <div class='show'>
        <h1>Detail du films</h1>
        <div>
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    results.poster_path" width='100px'>
            <p>Titre:{{this.results.title}}</p>
            <p>Titre original:{{this.results.oldtitle}}</p>
            <p>Genre :</p>
            <div v-for='result in results.genres' :key='result.id'>
                <p>{{result.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'show',
        data() {
            return {
                query: '',
                results: {
                    poster_path:'',
                    genres:[],
                    title:'',
                    oldtitle:''

                }
            }
        },
        methods: {
            async getResult() {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=1def7fe231547d1124aaf23ed94d0a24&language=en-US`)
                console.log(data)
                this.results.title = data.title;
                this.results.oldtitle = data.original_title;
                this.results.poster_path = data.poster_path
                for (const dataKey in data.genres) {
                    this.results.genres.push(data.genres[dataKey]);
                }
            }
        },
        mounted() {
            this.getResult();
            console.log(this.$route.params.id)
        }
    }
</script>