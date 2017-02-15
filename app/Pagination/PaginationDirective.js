// app.directive("pagination", function() {
// 	return {
// 		restrict: "E",
// 		transclude: true,
// 		// replace: true,
// 		scope: {
// 			items: "=",
// 			totallItems: "=",
// 			currentPage: "=",
// 			onSelectPage: "="
// 		},
// 		templateUrl: "app/Pagination/_pagination.html",
// 		controller: ["$scope",
// 			function ($scope) {
// 				var items = $scope.pageSize;
// 				var totallItems = $scope.postsLength;
// 				var currentPage = $scope.pageNumber;
// 				var pages = [];
// 				var i = 1;
// 				var k = totallItems / items;
// 				for (i; i <= k; i++) {
// 					pages.push(i);
// 				}
// 				$scope.pages = pages;
// 			}
// 		]
// 	};
// });