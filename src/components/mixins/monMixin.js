export default {
  data () {
    return {
      nom: 'Daniel Vermonden'
    }
  },
  methods: {
    ecrireNom: function () {
    	return 'Le nom est ' + this.nom
    }
  }
}
