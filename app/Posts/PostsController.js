app.controller('postsController', function($scope, PostsService) {
	// USE STANDART CALLBACK
	PostsService.getPosts(function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
			$scope.posts = result;
	});  
});