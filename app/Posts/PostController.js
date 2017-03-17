app.controller('postController', function($scope, $routeParams, UpgradeDomService, PostsService){
	// USE PROMISES
	$scope.loading = true;
	$scope.formEditable = false;
	$scope.editPost = function () {
		$scope.formEditable = true;
	};
	$scope.cancelEditPost = function () {
		$scope.formEditable = false;
		window.location.reload();
	};
	$scope.savePost = function (postForm) {
		console.log("$scope.savePost - done!");
		console.log($scope.data);
		console.log("Is form valid? - " + postForm.$valid);
		if (postForm.$valid) {
			PostsService.savePost($scope.post.id, {
				id: $scope.post.id,
				userId: $scope.post.userId,
				title: $scope.post.title,
				body: $scope.post.body
			}).then(
				function onSuccess(response) {
					console.log("Save post status: " + response.status + " " + response.statusText);
					$scope.formEditable = false;
				}, function onError(response) {
					console.log("Something is wrong! Post status: " + response.status + " " + response.statusText);
				}
			); 
			return;
		} console.log("Form is invalid !!!");
	};

	PostsService.getPostById($routeParams.id).then(
		function onSuccess(response) {
			$scope.post = response.data;
			$scope.postErrorMessage = null;
		}, function onError(response) {
			console.log("GetPostById method's status: " + response.status + " " + response.statusText);
			$scope.postErrorMessage = "GetPostById method's status: " + response.status + " " + response.statusText;
		}
	);

	PostsService.getCommentsByPostId($routeParams.id).then(
		function onSuccess(response) {
			$scope.comments = response.data;
			$scope.commentsErrorMessage = null;
			$scope.loading = false;
		},
		function onError(response) {
			console.log("GetCommentsByPostId method's status: " + response.status + " " + response.statusText);
			$scope.commentsErrorMessage = "GetCommentsByPostId method's status: " + response.status + " " + response.statusText;
			$scope.loading = false;
		}
	);

	UpgradeDomService.upgradeDom();
	
});