angular.module('myApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
    .when('', '/')

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: 'home/home.html'
    })

    .state('about', {
      url: '/about',
      controller: 'aboutCtrl',
      templateUrl:'about/about.html'
    })

})
