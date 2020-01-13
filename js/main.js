var app = new Vue({
    el: '#app',
    data: {
      message: 'que onda soy el nuevo mensaje',
      portfolioElements: [
          {
            name: 'elemento1',
            isActive: true
          }, {
            name: 'elemento2',
            isActive: false
          }, {
            name: 'elemento3',
            isActive: true
          }
        ]
    }
  })