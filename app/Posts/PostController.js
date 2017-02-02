app.controller('postController', function($scope, $routeParams, PostsService){
	// USE PROMISES
	$scope.savePost = function (postForm) {
		$scope.data = {
			id: $scope.post.id,
			userId: $scope.post.userId,
			title: $scope.post.title,
			body: $scope.post.body
		};
		console.log("$scope.savePost - done!");
		console.log($scope.data);
		console.log("Is form valid? - " + postForm.$valid);
		if (postForm.$valid) {
			PostsService.savePost($scope.post.id, $scope.data).then(
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
	// Юра а між викликами сервісів не потрібно зробити пропуск для візуального розділення частин контролера?
	PostsService.getPostById($routeParams.id).then(
		function onSuccess(response) {
			$scope.post = response.data;
			$scope.postErrorMessage = null;
		}, function onError(response) {
			console.log("GetPostById method's status: " + response.status + " " + response.statusText);
			$scope.postErrorMessage = "GetPostById method's status: " + response.status + " " + response.statusText;
		}
	);
	// Юра а між викликами сервісів не потрібно зробити пропуск для візуального розділення частин контролера?
	PostsService.getCommentsByPostId($routeParams.id).then(
		function onSuccess(response) {
			$scope.comments = response.data;
			$scope.commentsErrorMessage = null;
		},
		function onError(response) {
			console.log("GetCommentsByPostId method's status: " + response.status + " " + response.statusText);
			$scope.commentsErrorMessage = "GetCommentsByPostId method's status: " + response.status + " " + response.statusText;
		}
	);
	// Юра а між викликами сервісів не потрібно зробити пропуск для візуального розділення частин контролера?
	$scope.formEditable = false;
	$scope.editPost = function () {
		$scope.formEditable = true;
	};
	$scope.cancelEditPost = function () {
		$scope.formEditable = false;
	};
});