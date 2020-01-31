//const BASEURL = "https://curada.000webhostapp.com/";
const BASEURL = window.location.protocol + '//' + window.location.hostname;

var app = new Vue({
    el: '#app',
    data: {
      message: 'que onda soy el nuevo mensaje',
      portfolioElements: [],
      baseUrl: BASEURL
    },
    methods:{
      callPortfolio: function(){
        let self = this;
        $.ajax({
          url: self.baseUrl + "/hello.php", 
          crossDomain : true,
          datatype: 'json',
          success: function(result){
            self.portfolioElements = JSON.parse(result)
            
            console.log(self.portfolioElements);
        }});
      },
      GetImageURL: function(url){
        let self = this;
        if(url.img != undefined){
          return self.baseUrl + url.img;
        }else{
          return "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
        }
      }
    },
    created: function(){
      let self = this;
      self.callPortfolio();
    }
  })