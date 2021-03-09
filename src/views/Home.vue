<template>
  <div class="home">
  	<div>
  		<p>ESSAI ROUTEUR</p>
  		<router-link to="/about/daniel">Aller à About</router-link>
  		<p><button @click="testRouter">Route vers Albert</button></p>
  		<p><button @click="testRouterWithQuery">Route avec query</button></p>
  	</div>

  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
  	testRouter: function () {
  		this.$router.push({ name: 'about', params: { username: 'Albert' }
  		})
  	},
  	testRouterWithQuery: function () {
  		this.$router.push({ name: 'about', query: { nom: 'Daniel Vermonden' }
  		})
  	}
  }

}
</script>
