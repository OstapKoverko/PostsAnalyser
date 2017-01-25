app.controller('postController', function($scope, $routeParams, PostsService){
	// USE PROMISES
	PostsService.getPostById($routeParams.id).then(
		function onSuccess(response) {
			$scope.post = response.data;
		}, function onError(response) {
			console.log("GetPostById method's status: " + response.status + " " + response.statusText);
		});
	PostsService.getCommentsByPostId($routeParams.id).then(
		function onSuccess(response) {
			$scope.comments = response.data;
		},
		function onError(response) {
			console.log("GetCommentsByPostId method's status: " + response.status + " " + response.statusText);
		});
});