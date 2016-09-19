'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
app
  .controller('LoginCtrl', function ($scope, $state,dataService,toastService,$localStorage,jwtHelper,$rootScope, Restangular) {

    $scope.user = {};
    $scope.login = function() {
      dataService.auth.login($scope.user).then(function (res) {
        console.log(res);
        if(!res.success){
          toastService.error("Error !",res.message);
          return;
        }
        toastService.success("Welcome !","Login Successful");



        $localStorage.token = res.data.token;
        Restangular.setDefaultHeaders({'x-access-token' : res.data.token});
        $rootScope.user = jwtHelper.decodeToken(res.data.token);
        console.log($rootScope.user);
        $state.go('app.dashboard');
      },function(err){

        toastService.error("Sorry !","User not found");

      });
    };
  });
