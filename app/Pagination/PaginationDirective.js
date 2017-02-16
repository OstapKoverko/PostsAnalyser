app.directive("pagination", function() {
	return {
		restrict: "E",
		transclude: true,
		// replace: true,
		scope: {
			pageSize: "=",
			postsQuantity: "=",
			currentPage: "=",
			onSelectPage: "&"
		},
		templateUrl: "app/Pagination/pagination.html",
		controller: ["$scope",
			function ($scope) {
				$scope.$watch("pageSize",
					function refresh(pageSize) {
						if(!pageSize)return;
						var pages = [];
						var i = 1;
						var k = $scope.postsQuantity / pageSize;
						for (i; i <= k; i++) {
							pages.push(i);
						}
						$scope.pages = pages;
					}
				);
				$scope.selectPage = function (currentPage) {
					$scope.currentPage = currentPage;
					$scope.onSelectPage(currentPage);
					
					// Дуже дивно чому не працює console.log та debugger? :((((
					console.log(currentPage);
					debugger;
				};			
			}
		]
	};
});