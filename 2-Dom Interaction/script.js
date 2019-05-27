new Vue({
    el: '#app',
    data: {
        title: 'Hello World!', 
        link: 'http://www.google.com',
        finishedLink: '<a href="http://www.google.fr">Google</a>',
    },
    methods: {
        sayHello: function() {
            this.title = 'HeLLo'
            return this.title;
        }
    }
});