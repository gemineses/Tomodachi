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
          datatype: 'json',
          success: function(result){
            console.log(result)
            self.portfolioElements = JSON.parse(result)
            
            console.log(self.portfolioElements);
        }});
      }
    },
    created: function(){
      let self = this;
      self.callPortfolio();
    }
  })