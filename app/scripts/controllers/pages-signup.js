'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesSignupCtrl
 * @description
 * # PagesSignupCtrl
 * Controller of the minovateApp
 */
app
  .controller('SignupCtrl', function ($scope,dataService,toastService,$state, $stateParams, jwtHelper) {
    $scope.user = {};
    $scope.invitedUser = false;
    if($stateParams.token){
      $scope.invitedUser = true;
      $scope.user.username = jwtHelper.decodeToken($stateParams.token).username;
    }
    $scope.signup = function(){
      dataService.auth.signup($scope.user,$scope.invitedUser,$stateParams.token).then(function (res) {
      if(res.success){
        toastService.success("Awesome !","Check Your Email");
        $state.go('core.login');
      }
        else{
        toastService.error("Error!",res.message);
      }

      },function(err){

        toastService.error("Sorry !","An Error Occurred");

      });
    };
  });
