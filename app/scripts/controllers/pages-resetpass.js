'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesResetCtrl
 * @description
 * # PagesResetCtrl
 * Controller of the minovateApp
 */
app
  .controller('resetPassCtrl', function ($scope, dataService, toastService, jwtHelper, $stateParams) {
    $scope.user = jwtHelper.decodeToken($stateParams.token);
    console.log($scope.user);

    $scope.submit = function () {
      var data = {
        newpassword : $scope.user.password
      };
      dataService.auth.resetpass(data,$stateParams.token).then(function(res){
        console.log(res);
      },function(err){
        console.log(err);
      });
    };
  });
