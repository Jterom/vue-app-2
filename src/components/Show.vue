<template>
    <div class='show'>
        <h1>Detail du films</h1>
        <div>
            <p>{{this.results.title}}</p>
            <p>{{this.results.oldtitle}}</p>
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
                    title:'',
                    oldtitle:''

                }
            }
        },
        methods: {
            async getResult() {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=1def7fe231547d1124aaf23ed94d0a24&language=en-US`)
                console.log(data);
                this.results.title=data.title;
                this.results.oldtitle=data.original_title;
            }
        },
        mounted() {
            this.getResult();
            console.log(this.$route.params.id)
        }
    }
</script>