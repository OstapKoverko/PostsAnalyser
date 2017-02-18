app.controller('postsController', function($scope, PostsService) {
	$scope.pageSize = 10;
	$scope
	// $scope.pageNumber = 1;

	$scope.setPageSize = function (pageSize) {
		$scope.pageSize = pageSize;
		getPostsService();
	};
	$scope.onSelectPage = function (pageNumber) {
		$scope.pageNumber = pageNumber;
		getPostsService();
	};
		getPostsService();
	// USE STANDART CALLBACK
	function getPostsService () {
		PostsService.getPosts($scope.pageSize, $scope.pageNumber,
			function(err, result) {
				if (err) {
					console.log(err);
					$scope.postsErrorMesage = err;
					return;
				}
				$scope.postsErrorMesage = null;
				$scope.posts = result.posts;
				$scope.postsQuantity = result.postsQuantity;
				debugger;
			}
		);
	}
	getPostsService();
});