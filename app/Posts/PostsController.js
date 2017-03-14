app.controller('postsController', function($scope, $filter, PostsService, styleSwitcher) {
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

	// ###########################
	// ###     For MDL only    ###
	// ### Update new elements ###
	// ###########################
	// Drestin commented on 7 Aug 2015
	// @liuyuanhuo
	// I had a similar problem and came up with following solution taking advantage of Mutation Observers.
	// It is still not perfect but it is certainly less memory consuming than calling a function which check all the DOM every 200ms.
	// In my use-case, the classes don't change, so I check only for new elements.
	// But the Mutation Observer API is able to also detect attribute changes. Just adapt the callback to your needs.
	// Again, it is only a workaround, until MDL supports "automatically dynamic" websites.
	// See details on https://github.com/google/material-design-lite/issues/917
	
	var observer = new window.MutationObserver(function(mutations) {
		var upgrade = false;
		for (var i = 0; i < mutations.length; i++) {
			if (mutations[i].addedNodes.length > 0) {
				upgrade = true;
				break;
			} 
		}
		if (upgrade) {
			// If there is at least a new element, upgrade the DOM.
			// Note: upgrading elements one by one seems to insert bugs in MDL 
			window.componentHandler.upgradeDom();
		}
	});
	observer.observe(document, {
		childList : true,
		subtree : true
	});
		
	// Material Design Lite will automatically register and render all elements
	// marked with MDL classes upon page load. However in the case where you are 
	// creating DOM elements dynamically you need to register new elements 
	// using the upgradeElement function. 
	
});