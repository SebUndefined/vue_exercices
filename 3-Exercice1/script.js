new Vue( {
    el: '#exercise',
    data: {
        name: 'Sébastien',
        age: 30,
        imageUrl: 'https://img.discogs.com/z6aK9PWTB5PWOoTPZ40xcF0Hqwg=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-29809-1275706991.jpeg.jpg'
    },
    methods: {
        ageByThree: function() {
            let ageByTree = 30 * 3;
            return ageByTree;
        },
        getNumberBetweenZeroAndOne: function() {
            let number = Math.random();
            return number;
        }
    }
});