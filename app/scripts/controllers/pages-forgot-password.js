'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesForgotPasswordCtrl
 * @description
 * # PagesForgotPasswordCtrl
 * Controller of the minovateApp
 */
app
  .controller('ForgotPasswordCtrl', function ($scope,dataService,toastService) {
    $scope.user = {};
    $scope.submit = function () {
      console.log($scope.user);
      dataService.auth.forgetpass($scope.user).then(function(res){
        console.log(res);
        if(!res.success){
          return toastService.error("Error !",res.message);
        }
          toastService.success("Successful !",res.message);
      },
      function(err){
        console.log(err);
      });
    };
  });
