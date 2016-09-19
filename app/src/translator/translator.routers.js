angular.module('minovateApp')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('app.translator',{
      url: '/translator',
      controller: 'TranslatorCtrl',
      templateUrl: 'src/translator/translator.html',
      
    })

}]);
