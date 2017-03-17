app.controller('postsController', function($scope, $filter, PostsService, UpgradeDomService, styleSwitcher) {
	$scope.loading = true;
	$scope.pageNumber = 1;
	$scope.pageSize = 10;
	$scope.framework = styleSwitcher || 'bootstrap';
	$scope.setPageSize = function (pageSize) {
		$scope.pageSize = pageSize;
		$scope.pageNumber = 1;
		getPosts();
	};
	$scope.onSelectPage = function (pageNumber) {
		$scope.pageNumber = pageNumber;
		getPosts();
	};
	$scope.setLocalStorage = function () {
		$scope.storage = 'localStorage';
		debugger;
	};
	$scope.setWebSQL = function () {
		$scope.storage = 'WebSQL';
		debugger;
	};
	
	function getPosts () {
		PostsService.getPosts($scope.pageSize, $scope.pageNumber, $scope.storage).then(
			function onSuccess(response) {
				$scope.postsErrorMesage = null;
				$scope.posts = response.posts;
				$scope.postsQuantity = response.postsQuantity;
				$scope.timeStorage = response.timeStorage;
				$scope.pageEnd = $scope.pageNumber * $scope.pageSize;
				$scope.pageBegin = $scope.pageEnd - $scope.pageSize + 1;
				$scope.loading = false;
				debugger;
			},
			function onError(response) {
				console.log(response);
				$scope.postsErrorMesage = response;
			}
		);
	}
	getPosts();		

	UpgradeDomService.upgradeDom();
	
});