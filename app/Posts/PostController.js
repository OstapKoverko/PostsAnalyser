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
document.getElementById('post-err').style.display = "block";
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
	$scope.fieldblock = true;
	$scope.showEdit = true;
	$scope.editPost = function () {
		$scope.fieldblock = false;
		$scope.showEdit = false;
		$scope.showCancel = true;
		$scope.showSave = true;
	};
	$scope.cancelEditPost = function () {
		$scope.fieldblock = true;
		$scope.showEdit = true;
		$scope.showCancel = false;
		$scope.showSave = false;
	};
});