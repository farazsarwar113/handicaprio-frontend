angular.module('minovateApp')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('app.about',{
      url: '/about',
      controller: 'AboutCtrl',
      templateUrl: 'src/about/about.html'
      
    })


}]);
