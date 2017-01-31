app.controller('postsController', function($scope, PostsService) {
	// USE STANDART CALLBACK
	PostsService.getPosts(function (err, result) {
		if (err) {
			console.log(err);
			$scope.postsErrorMesage = err;
			$scope.postsError = true;
			// $scope.postsErrShow = true;
			return;
		}
			$scope.posts = result;
			$scope.postsError = null;
			// $scope.postsShow = true;
	});  
});