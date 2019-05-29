new Vue({
  el: '#exercise',
  data: {
    effectClass: {
      highlight: false,
      shrink: true
    },
    userclasse : "",
    userclasseSecond: "",
    applysecondclasse: false,
    arrayclass1:"arrayclass1",
    arrayclass2:"arrayclass2",
    arrayclass3:"arrayclass3",
    myCustomStyle: {
      padding: "30px",
      width: "100px",
      height: "200px",
    },
    styleProgress: {
      height: "30px",
      backgroundColor: "deeppink",
      width: "0px"
    }
  },
  methods: {
    startEffect: function() {
      let obj = this;
      setInterval(function(){
        obj.effectClass.highlight = !obj.effectClass.highlight;
        obj.effectClass.shrink = !obj.effectClass.shrink;
      }, 1000);
    },
    startProgressBar: function() {
      let obj = this;
      let width = 0;
      setInterval(function(){
        obj.styleProgress.width = width + "px";
        width += 10;
      }, 500);
    }
  },
});
