<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>
        TEST ROUTEUR : {{ getUsername() }} ou bien {{ $route.params.username }}
      </p>
    </div>
    <div>
      <p>
        TEST ROUTEUR : {{ getName() }} ou bien {{ $route.query.nom }}
      </p>
    </div>
    <div>
      <p>TEST MIXIN</p>
      <p>Nom : {{ nom }}</p>
      <p>{{ ecrireNom() }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import monMixin from "@/components/mixins/monMixin.js";

export default {
  name: "about",
  mixins: [monMixin],
  methods: {
    getUsername() {
      return this.$route.params.username;
    },
    getName() {
      return this.$route.query.nom;
    },
  },
};
</script>
