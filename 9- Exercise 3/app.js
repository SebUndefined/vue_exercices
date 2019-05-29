new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
            result: function() {
                if(this.value != 37) {
                    return "Not there yet";
                }
                else {
                    return "Here you are !!!"
                }
            },
            
        },
        watch: {
            // On peut surveiller les computed properties...
            result: function(value) {
                let vm = this;
                setTimeout(function(){
                    console.log("Reset value");
                    vm.value = 0;
                }, 5000)
            }
        },
    });