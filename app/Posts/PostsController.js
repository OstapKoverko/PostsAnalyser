app.controller('postsController', function($scope, PostsService) {
	// USE STANDART CALLBACK
	PostsService.getPosts(function (err, result) {
		if (err) {
			console.log(err);
			$scope.postsErrorMesage = err;
			return;
		}
			$scope.posts = result;
			$scope.postsErrorMesage = null;
	});  
});