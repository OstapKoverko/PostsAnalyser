app.directive("pagination", function() {
	return {
		restrict: "E",
		transclude: "true",
		scope: {
			pageSize: "=",
			postsQuantity: "=",
			onSelectPage: "="
		},
		templateUrl: "app/Pagination/pagination.html",
		controller: ["$scope",
			function ($scope) {
				$scope.$watchGroup(["postsQuantity", "pageSize"],
					function refresh([postsQuantity, pageSize]) {
						if(!postsQuantity)return;
						if(!pageSize)return;
						var pages = [];
						var i = postsQuantity / pageSize;
						while (i--) {
							pages.unshift(i);
						}
						$scope.pages = pages;
					}
				);
				$scope.selectPage = function (currentPage) {
					$scope.currentPage = currentPage;
					$scope.onSelectPage(currentPage);
				};			
			}
		]
	};
});