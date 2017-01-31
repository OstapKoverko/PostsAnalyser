app.controller('postController', function($scope, $routeParams, PostsService){
	// USE PROMISES
	PostsService.getPostById($routeParams.id).then(
		function onSuccess(response) {
			$scope.post = response.data;
			$scope.postError = null;
			// $scope.postShow = true;
		}, function onError(response) {
			console.log("GetPostById method's status: " + response.status + " " + response.statusText);
			$scope.postErrorMessage = "GetPostById method's status: " + response.status + " " + response.statusText;
			// $scope.postErrShow = true;
			$scope.postError = true;
		}
	);
	PostsService.getCommentsByPostId($routeParams.id).then(
		function onSuccess(response) {
			$scope.comments = response.data;
			// $scope.commentsShow = true;
			$scope.commentsError = null;
		},
		function onError(response) {
			console.log("GetCommentsByPostId method's status: " + response.status + " " + response.statusText);
			$scope.commentsErrorMessage = "GetCommentsByPostId method's status: " + response.status + " " + response.statusText;
			// $scope.commentsErrShow = true;
			$scope.commentsError = true;
		}
	);
	$scope.formEditable = false;
	$scope.editPost = function () {
		$scope.formEditable = true;
	};
	$scope.cancelEditPost = function () {
		$scope.formEditable = false;
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