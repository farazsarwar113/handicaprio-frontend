"use strict";
angular.module('minovateApp').factory('dataService', function (Restangular, $rootScope, $http, $localStorage) {

  var words = {
    get: function () {
      return Restangular.one('dictionary').get();
    },
    create: function (data) {
      return Restangular.one('dictionary').post('', data);
    },
    delete: function (cid, sid, nid) {
      return Restangular.one('clients').one(cid).one('sites').one(sid).one('notes').one(nid).remove();
    }
  };

  var word = {
    get: function (wid) {
      return Restangular.one('dictionary').one(wid).get();
    },
    update: function (wid,data) {
      return Restangular.one('clients').one(wid).customPUT(data);
    }
  };

  var allVerb = {
    get: function () {
      return Restangular.one('verbs').get();
    },
    create: function (data) {
      return Restangular.one('verbs').post('', data);
    },
    delete: function (vid) {
      return Restangular.one('verbs').one(vid).remove();
    }
  };

  var getVerb = {
    get: function (vid) {
      return Restangular.one('verbs').one(vid).get();
    },
    update: function (vid, data) {
      return Restangular.one('verbs').one(vid).customPUT(data);
    }
  };

  var allPronoun = {
    get: function () {
      return Restangular.one('pronoun').get();
    },
    create: function (data) {
      return Restangular.one('pronoun').post('', data);
    },
    delete: function (proid) {
      return Restangular.one('pronoun').one(proid).remove();
    }
  };

  var getPronoun = {
    get: function (proid) {
      return Restangular.one('pronoun').one(proid).get();
    },
    update: function (proid, data) {
      return Restangular.one('pronoun').one(proid).customPUT(data);
    }
  };

  var allAdverb = {
    get: function () {
      return Restangular.one('adverbs').get();
    },
    create: function (data) {
      return Restangular.one('adverbs').post('', data);
    },
    delete: function (advid) {
      return Restangular.one('adverbs').one(advid).remove();
    }
  };

  var getAdverb = {
    get: function (advid) {
      return Restangular.one('adverbs').one(advid).get();
    },
    update: function (advid, data) {
      return Restangular.one('adverbs').one(advid).customPUT(data);
    }
  };

  var allAdjective = {
    get: function () {
      return Restangular.one('adjective').get();
    },
    create: function (data) {
      return Restangular.one('adjective').post('', data);
    },
    delete: function (advid) {
      return Restangular.one('adjective').one(advid).remove();
    }
  };

  var getAdjective = {
    get: function (adjid) {
      return Restangular.one('adjective').one(adjid).get();
    },
    update: function (adjid, data) {
      return Restangular.one('adjective').one(adjid).customPUT(data);
    }
  };

  var allPreposition = {
    get: function () {
      return Restangular.one('preposition').get();
    },
    create: function (data) {
      return Restangular.one('preposition').post('', data);
    },
    delete: function (preid) {
      return Restangular.one('preposition').one(preid).remove();
    }
  };

  var getPreposition = {
    get: function (preid) {
      return Restangular.one('preposition').one(preid).get();
    },
    update: function (preid, data) {
      return Restangular.one('preposition').one(preid).customPUT(data);
    }
  };

  var allNoun = {
    get: function () {
      return Restangular.one('noun').get();
    },
    create: function (data) {
      return Restangular.one('noun').post('', data);
    },
    delete: function (nid) {
      return Restangular.one('noun').one(nid).remove();
    }
  };

  var getNoun = {
    get: function (nid) {
      return Restangular.one('noun').one(nid).get();
    },
    update: function (nid, data) {
      return Restangular.one('noun').one(nid).customPUT(data);
    }
  };

  var allDeterminer = {
    get: function () {
      return Restangular.one('determiner').get();
    },
    create: function (data) {
      return Restangular.one('determiner').post('', data);
    },
    delete: function (detid) {
      return Restangular.one('determiner').one(detid).remove();
    }
  };

  var getAdjective = {
    get: function (detid) {
      return Restangular.one('determiner').one(detid).get();
    },
    update: function (detid, data) {
      return Restangular.one('determiner').one(detid).customPUT(data);
    }
  };

  var translator = {
    translate: function(data){
      return Restangular.one('translation').post('',data);
    }
  }

  return {
    words: words,
    word: word,
    allVerb: allVerb,
    getVerb: getVerb,
    allPronoun: allPronoun,
    getPronoun: getPronoun,
    allAdverb: allAdverb,
    getAdverb: getAdverb,
    allAdjective: allAdjective,
    getAdjective: getAdjective,
    allPreposition: allPreposition,
    getPreposition: getPreposition,
    allNoun: allNoun,
    getNoun: getNoun,
    allDeterminer: allDeterminer,
    getAdjective: getAdjective,
    translator: translator
  };


});
