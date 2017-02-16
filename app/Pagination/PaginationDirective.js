app.directive("pagination", function() {
	return {
		restrict: "E",
		transclude: true,
		// replace: true,
		scope: {
			items: "=",
			totalItems: "=",
			currentPage: "=",
			// onSelectPage: "$"
		},
		templateUrl: "app/Pagination/pagination.html",
		controller: ["$scope",
			function ($scope) {
				var pages = [];
				var i = 1;
				var k = $scope.totalItems / $scope.items;
				for (i; i <= k; i++) {
					pages.push(i);
				}
				$scope.pages = pages;
			}
		]
	};
});