'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesProfileCtrl
 * @description
 * # PagesProfileCtrl
 * Controller of the minovateApp
 */
app
  .controller('ProfileCtrl', function ($scope, $rootScope, $localStorage, jwtHelper,$timeout, dataService, toastService, Upload, $window) {
    $scope.page = {
      title: 'Profile Page',
      subtitle: 'Place subtitle here...'
    };

    $scope.myImage='';
    $scope.myCroppedImage='';
    $scope.changeProfileClicked = false;
    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
      $scope.changeProfileClicked = true;

    };
    console.log(document.querySelector('#fileInput'));


    $scope.upload = function (dataUrl, name) {
      //console.log(dataUrl);
      Upload.upload({
        url: $rootScope.apiUrl+'file/upload/users',
        transformRequest: angular.identity,
        "headers": {'x-access-token': $localStorage.token,
          'Content-Type': undefined},
        data: {
          'file': Upload.dataUrltoBlob(dataUrl, name)
        }
      }).then(function (response) {
        console.log('1');
        console.log(response);
        $timeout(function () {
          $scope.changeProfileClicked = false;
          $window.location.reload();
        },500);
      }, function (response) {
        console.log('2');
        console.log(response);
      }, function (evt) {
        console.log('3');
        console.log(evt);
      });

      //
      // $timeout(function () {
      //   $scope.changeProfileClicked = false;
      //   $window.location.reload();
      // },1000);
    };


    $scope.changeTab = function(tab){
      if(tab === 2){
        console.log(tab);
        angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
      }
    };



    $scope.pass = {
      oldpass: "",
      newpass: "",
      newpass2: ""
    };
    $rootScope.user = jwtHelper.decodeToken($localStorage.token);

    dataService.user.get().then(function (res) {
      $rootScope.user = res.data;
    }, function (err) {
    });


    // Scope Functions
    $scope.saveUserData = function () {
      dataService.user.update().then(function (res) {
        console.log(res);
        toastService.success("Cool !", "User updated Successfully");
      }, function (err) {
        console.log(err);
      });
    };

    $scope.changePass = function () {
      var data = {
        username: $rootScope.user.username,
        password: $scope.pass.oldpass,
        newpassword: $scope.pass.newpass
      };

      dataService.auth.updatepass(data).then(
        function (res) {
          console.log(res);
          toastService.success("Success", "Password Changed Successfully");
          $scope.pass = {
            oldpass: "",
            newpass: "",
            newpass2: ""
          };
        },
        function (err) {
          console.log(err);
          toastService.error("Error", "Old Password is incorrect");
        });
    };

    $scope.deleteAccount = function () {
      dataService.user.delete().then(
        function (res) {
          console.log(res);
        },
        function (err) {
          console.log(err);
        });
    };
  });
