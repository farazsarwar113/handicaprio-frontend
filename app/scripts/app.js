'use strict';

/**
 * @ngdoc overview
 * @name minovateApp
 * @description
 * # minovateApp
 *
 * Main module of the application.
 */

/*jshint -W079 */

var app = angular
  .module('minovateApp', [
    'ngImgCrop',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'picardy.fontawesome',
    'ui.bootstrap',
    'ui.router',
    'ui.utils',
    'angular-momentjs',
    'FBAngular',
    'lazyModel',
    'toastr',
    'angularBootstrapNavTree',
    'oc.lazyLoad',
    'ui.select',
    'ui.tree',
    'textAngular',
    'colorpicker.module',
    'angularFileUpload',
    'ngImgCrop',
    'datatables',
    'datatables.bootstrap',
    'datatables.colreorder',
    'datatables.colvis',
    'datatables.tabletools',
    'datatables.scroller',
    'datatables.columnfilter',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.moveColumns',
    'ngTable',
    'smart-table',
    'angular-flot',
    'angular-rickshaw',
    'easypiechart',
    'uiGmapgoogle-maps',
    'ui.calendar',
    'ngTagsInput',
    'pascalprecht.translate',
    'ngMaterial',
    'localytics.directives',
    'leaflet-directive',
    'wu.masonry',
    'ipsum',
    'angular-intro',
    'dragularModule',
    'restangular',
    'angular-jwt',
    'ngStorage',
    'ngFileUpload'
  ])
  .constant('SERVER_PATH',"http://localhost:3000")
  .run(['$rootScope', '$state', '$stateParams', '$localStorage', 'jwtHelper' , 'SERVER_PATH', function ($rootScope, $state, $stateParams, $localStorage, jwtHelper, SERVER_PATH) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.socket = io(SERVER_PATH);
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {

      event.targetScope.$watch('$viewContentLoaded', function () {

        angular.element('html, body, #content').animate({scrollTop: 0}, 200);

        setTimeout(function () {
          angular.element('#wrap').css('visibility', 'visible');

          if (!angular.element('.dropdown').hasClass('open')) {
            angular.element('.dropdown').find('>ul').slideUp();
          }
        }, 200);
      });
      $rootScope.containerClass = toState.containerClass;

      $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log(event);
          console.log(toState);
          console.log(toParams);
          console.log(fromState);
          console.log(fromParams);
          console.log(error);
        });
    });
    if($localStorage.token){
      $rootScope.user = jwtHelper.decodeToken($localStorage.token);
    }

    $rootScope.imageUrl = "https://s3-eu-west-1.amazonaws.com/assetforest-images/";
    $rootScope.apiUrl = SERVER_PATH+"/api";

  }])

  .config(['RestangularProvider','SERVER_PATH', function (RestangularProvider, SERVER_PATH) {
    RestangularProvider.setBaseUrl(SERVER_PATH+'/api');
  }])

  .config(['uiSelectConfig', function (uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
  }])

  //angular-language
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }])

  .directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function () {
          scope.$apply(function () {
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/home');

    $stateProvider

      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'views/tmpl/app.html'
      })
      //dashboard
      .state('app.dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl',
        templateUrl: 'views/tmpl/dashboard.html',
        resolve: {
          plugins: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/vendor/datatables/datatables.bootstrap.min.css',
              'scripts/vendor/datatables/datatables.bootstrap.min.css'
            ]);
          }]
        }
      })
  }]);

