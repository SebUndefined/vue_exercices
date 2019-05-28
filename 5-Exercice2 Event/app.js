new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        onClick: function(){
            alert("The button has been clicked !!")
        },
        getKeydownValue: function(event) {
            this.value = event.target.value
        },

    }
});