app.controller('postsController', function($scope, PostsService) {
	PostsService.getPosts(
	// USE STANDART CALLBACK
		function (err, result) {
			if (err) {
				console.log(err);
			} else {
				$scope.posts = result;
			}	
		}
	);  
});