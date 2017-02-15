app.directive("pagination", function() {
	return {
		restrict: "E",
		transclude: true,
		// replace: true,
		scope: {
			pages: "=directivePages"
		},
		templateUrl: "app/Pagination/_pagination.html",
		controller: ["$scope",
			function ($scope) {
				$scope.pageSize = items,
				$scope.postsLength = totallItems,
				$scope.pageNumber = currentPage,
				// Чому тут не можна оголошувати змінні ?
				var pages = [];
				var i = 1;
				var k = totallItems / items;
				for (i; i <= k; i++) {
					pages.push(i);
				}
				$scope.pages = pages;
			}
		]
	};
});