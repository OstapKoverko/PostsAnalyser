app.controller('postController', function($scope, $routeParams, PostsService){
	// USE PROMISES
	PostsService.getPostById($routeParams.id).then(
		function onSuccess(response) {
			$scope.post = response.data;
			$scope.postShow = true;
		}, function onError(response) {
			console.log("GetPostById method's status: " + response.status + " " + response.statusText);
			$scope.postErr = "GetPostById method's status: " + response.status + " " + response.statusText;
			$scope.postErrShow = true;
		}
	);
	PostsService.getCommentsByPostId($routeParams.id).then(
		function onSuccess(response) {
			$scope.comments = response.data;
			$scope.commentsShow = true;
		},
		function onError(response) {
			console.log("GetCommentsByPostId method's status: " + response.status + " " + response.statusText);
			$scope.commentsErr = "GetCommentsByPostId method's status: " + response.status + " " + response.statusText;
			$scope.commentsErrShow = true;
		}
	);
	$scope.formUnEditable = true;
	$scope.editPost = function () {
		$scope.formUnEditable = false;
	};
	$scope.cancelEditPost = function () {
		$scope.formUnEditable = true;
	};
	// 	$scope.uneditable = true;
	// $scope.editPost = function () {
	// 	$scope.editable = true;
	// 	$scope.uneditable =false;
	// };
	// $scope.cancelEditPost = function () {
	// 	$scope.editable = false;
	// 	$scope.uneditable = true;
	// };
});