app.directive("pagination", function() {
	return {
		restrict: "E",
		transclude: true,
		// replace: true,
		scope: {
			pageSize: "=",
			postsQuantity: "=",
			currentPage: "=",
			// onSelectPage: "$"
		},
		templateUrl: "app/Pagination/pagination.html",
		controller: ["$scope",
			function ($scope) {
				$scope.$watch($scope.pageSize,
					function refresh() {
						var pages = [];
						var i = 1;
						var k = $scope.postsQuantity / $scope.pageSize;
						for (i; i <= k; i++) {
							pages.push(i);
						}
						$scope.pages = pages;
						debugger;
					}
				);
			}
		]
	};
});