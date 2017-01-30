app.controller('postsController', function($scope, PostsService) {
	// USE STANDART CALLBACK
	PostsService.getPosts(function (err, result) {
		if (err) {
			console.log(err);
			$scope.postsErr = err;
			$scope.postsErrShow = true;
			return;
		}
			$scope.posts = result;
			$scope.postsShow = true;
	});  
});