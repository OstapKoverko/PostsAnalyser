app.controller('postsController', function($scope, PostsService) {
	// USE STANDART CALLBACK
	PostsService.getPosts(function (err, result) {
		if (err) {
			console.log(err);
			$scope.err = err;
			document.getElementById('table').style.display = "none";
			document.getElementById('err').style.display = "block";
			return;
		}
			$scope.posts = result;
	});  
});