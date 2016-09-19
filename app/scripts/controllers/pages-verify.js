'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesVerifyCtrl
 * @description
 * # PagesVerifyCtrl
 * Controller of the minovateApp
 */
app
  .controller('VerifyCtrl', function ($scope, $state, dataService, toastService, $localStorage, jwtHelper, $rootScope, $stateParams) {
    $scope.user = jwtHelper.decodeToken($stateParams.token);

    dataService.auth.verify($stateParams.token).then(
      function(res){console.log(res);},
      function(err){console.log(err);});


  });
