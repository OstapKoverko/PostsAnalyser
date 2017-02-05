app.controller('postsController', function($scope, PostsService) {
	$scope.postsPerPage = 10;

	
	// USE STANDART CALLBACK
	PostsService.getPosts(function (err, result) {
		if (err) {
			console.log(err);
			$scope.postsErrorMesage = err;
			return;
		}
			$scope.posts = result;
			$scope.postsErrorMesage = null;
			$scope.pagesQuantity = result.length / $scope.postsPerPage;
			$scope.pages = [];
			for (var i = 1; i <= $scope.pagesQuantity; i++) {
				$scope.pages.push(i); 
			}
			console.log("pagesQuantity = " + $scope.pagesQuantity);
			console.log("$scope.pages = " + $scope.pages);
	});
});