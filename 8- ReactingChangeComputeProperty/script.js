new Vue( {
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    // La tâche est analysé et n'est exécuté que si nécessaire
    // Mais ne fonction que de manière synchrone
    computed: {
        output: function() {
            console.log("Computed")
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    },
    // Watch permet de surveiller une valeur (de data) et d'adopter un comportement
    // Quand cette dernière est modifiée. 
    // On n'assigne AUCUNE valeur, on adopte simplement un comportement lors du changement 
    // D'une valeur. La clé "counter" doit bien sûr correspondre à une des data
    watch: {
        counter: function(value) {
            let vm = this;
            setTimeout(function(){
                vm.counter = 0;
            }, 3000)
        }
    },
    methods: {
        result() {
            console.log("Method")
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        },
        simpleFunction() {
            console.log("simple function");
            return "Résultat simple fonction";
        }
    },

    
});