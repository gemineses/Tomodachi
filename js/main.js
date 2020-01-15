var app = new Vue({
    el: '#app',
    data: {
      message: 'que onda soy el nuevo mensaje',
      portfolioElements: []
    },
    methods:{
      callPortfolio: function(){
        let self = this;
        $.ajax({
          url: "https://curada.000webhostapp.com/hello.php", 
          crossDomain : true,
          success: function(result){
            self.portfolioElements = result;
            console.log(result);
        }});
      }
    },
    created: function(){
      let self = this;
      self.callPortfolio();
    }
  })