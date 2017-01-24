app.controller('postsController', function($scope, PostsService) {
	PostsService.getPosts(
	// USE STANDART CALLBACK
		function (err, result) {
			if (err === 200) {
				$scope.posts = result;	
			} else {
				console.log(err);
			}	
		}
		// function getPosts(result){
		//   $scope.posts = result;
		// }, 
		// function printError(result){
		//   console.log(result);
		// }
	);  
});