'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLockCtrl
 * @description
 * # PagesLockCtrl
 * Controller of the minovateApp
 */
app
  .controller('LockCtrl', function ($scope, $state, dataService, toastService, $localStorage, jwtHelper) {
    $scope.user = jwtHelper.decodeToken($localStorage.token);
    console.log($scope.user);

    $scope.submit = function(){
      console.log($scope.user);
      var data = {
        username: $scope.user.username,
        password: $scope.user.password
      };
      dataService.auth.login(data).then(function(res){
        toastService.success("Welcome back","Session Unlocked");
        $state.go("app.dashboard");
      },function(err){
        console.log(err);
      });
    };
  });
