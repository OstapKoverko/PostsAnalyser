app.directive("pagination", function() {
	return {
		restrict: "E",
		transclude: true,
		// replace: true,
		scope: {
			pageSize: "=",
			postsQuantity: "=",
			onSelectPage: "&"
		},
		templateUrl: "app/Pagination/pagination.html",
		controller: ["$scope",
			function ($scope) {
				$scope.$watch("pageSize",
					function refresh(pageSize) {
						if(!pageSize)return;
						var pages = [];
						var i = $scope.postsQuantity / pageSize;
						while (i--) {
							pages.unshift(i);
						}
						$scope.pages = pages;
					}
					// function refresh(pageSize) {
					// 	if(!pageSize)return;
					// 	var pages = [];
					// 	var i = $scope.postsQuantity / pageSize;
					// 	while (i > 0) {
					// 		pages.unshift(i);
					// 		i--;
					// 	}
					// 	$scope.pages = pages;
					// }
				);
				$scope.selectPage = function (currentPage) {
					$scope.currentPage = currentPage;
					$scope.onSelectPage(currentPage);
				};			
			}
		]
	};
});