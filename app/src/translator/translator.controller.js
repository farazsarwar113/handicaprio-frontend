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
			$scope.videos = [];
	        for(var i=0; i< $scope.tokens.length; i++){
	          console.log($scope.tokens[i]);
	          
	          $scope.videos.push('https://s3-eu-west-1.amazonaws.com/handicaprio/videos/'+$scope.tokens[i]+'.mp4');

	        }
	        $scope.showVideo = true;
	        console.log($scope.videos);

		},function(err){
			console.log(err);
		});
	}
	
  
});
