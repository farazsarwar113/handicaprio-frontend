angular.module('minovateApp')

.controller('TranslatorCtrl',function ($scope,$uibModal,dataService,$state, $mdDialog, toastService) {
	$scope.ok = function(){
		$scope.sentence ={
			word: $scope.sentence.word
		};
		console.log($scope.sentence);

		dataService.translator.translate($scope.sentence).then(function(res){
			console.log(res.data);
			if(res.data.warning){
				
				$scope.warnings = res.data.warning;
			}
			$scope.tokens = res.data.tokens;
			$scope.pos = res.data.pos;

		},function(err){
			console.log(err);
		});
	}
	
  
});
