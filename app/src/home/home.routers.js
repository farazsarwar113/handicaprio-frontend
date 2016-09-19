angular.module('minovateApp')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('app.home',{
      url: '/home',
      controller: 'HomeCtrl',
      templateUrl: 'src/home/home.html'
    })

}]);
