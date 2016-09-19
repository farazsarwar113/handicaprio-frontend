angular.module('minovateApp')
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('app.dictionary',{
      url: '/dictionary',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.words.get();
        }]
      }
    })
    .state('app.word',{
      url:'/dictionary/:wid',
      templateUrl: 'src/dictionary/word/word.html',
      controller: 'WordCtrl',
      resolve:{
        r_word: ['dataService','$stateParams', function (dataService,$stateParams) {
            return dataService.word.get($stateParams.wid);
        }]
      }
    })

    .state('app.verbs',{
      url: '/verbs',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.allVerb.get();
        }]
      }
    })

    .state('app.noun',{
      url: '/noun',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.allNoun.get();
        }]
      }
    })

    .state('app.pronoun',{
      url: '/pronoun',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.allPronoun.get();
        }]
      }
    })

    .state('app.adverb',{
      url: '/adverb',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.allAdverb.get();
        }]
      }
    })

    .state('app.determiner',{
      url: '/determiner',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.allDeterminer.get();
        }]
      }
    })

    .state('app.preposition',{
      url: '/preposition',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.allPreposition.get();
        }]
      }
    })

    .state('app.adjective',{
      url: '/adjective',
      controller: 'WordsCtrl',
      templateUrl: 'src/dictionary/dictionary.html',
      resolve:{
        r_words: ['dataService', function (dataService) {
          return dataService.allAdjective.get();
        }]
      }
    })


}]);
