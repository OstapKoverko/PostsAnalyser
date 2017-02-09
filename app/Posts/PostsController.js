app.controller('postsController', function($scope, PostsService) {
	// USE PROMISES
	
	// Прописав тут значення змінних, бо вже п'ятий день не можу отримати дані із posts.html
	// А коли прибираю це присвоєння, то змінні = undefined 
	$scope.pageSize = 10;
	$scope.pageNumber = 2;
	
	$scope.setPageSize = function (pageSize) {
		console.log("-------------------");
		console.log("OLD $scope.pageSize = " + $scope.pageSize);
		$scope.pageSize = pageSize;
		console.log("NEW $scope.pageSize = " + $scope.pageSize);
		
		
		// angular.js:12520 Error: [$rootScope:inprog] 
		// $scope.$apply();
		
		// angular.js:12520 Error: [$rootScope:inprog] 
		// $scope.$apply( function () {
		// 	$scope.pageSize = pageSize;
		// });
	};
	


	PostsService.getPosts ().then(
		function onSuccess(response) {
			$scope.postsErrorMesage = null;
			// Створюємо масив з номерами сторінок
			$scope.pages = [];
			for (var i = 1; i <= response.data.length / $scope.pageSize; i++) {
				$scope.pages.push(i); 
			}
			// Вирізаємо потрібний кусень постів
			$scope.posts = response.data.splice(($scope.pageNumber * $scope.ageSize) - $scope.pageSize, $scope.pageSize);
			console.log("pageSize = " + $scope.pageSize);
			console.log("pageNumber = " + $scope.pageNumber);
			console.log("$scope.pages = " + $scope.pages);
		}, function onError(response) {
			$scope.postErrorMessage = ("GetPosts method's status: " + response.status + " " + response.statusText);
		}	
	);
});


	/////////////////////////////
	// 2017.02.07  3:44 AM (!) //   
	/////////////////////////////
	
	// // var pageNumber =2;
	// var lastId;
	// var firstId;

	// $scope.setPageSize = function (pageSize) {
	// 	console.log("pageSize = " + pageSize);
	// 	$scope.createPages(pageSize);
	// 	$scope.spliceAllPosts(0);
	// 	pageSize = 0;
	// };	

	// $scope.setPageNumber = function(pageNumber) {
	// 	console.log("pageNumber = " + pageNumber);
	// 	lastId = $scope.pageSize * pageNumber;
 //   firstId = lastId - ($scope.pageSize - 1);
	// 	// $scope.posts = $scope.posts.splice($scope.firstId, pageSize);
	// 	// console.log($scope.posts);
	// 	$scope.spliceAllPosts(firstId);
	// 	firstId = 0;
	// 	lastId = 0;
	// };
	
	
	// // Створюємо масив з номерами сторінок
	// $scope.createPages = function () {
	// 	$scope.pages = [];
	// 	for (var i = 1; i <= $scope.allPosts.length / $scope.pageSize ; i++) {
	// 		$scope.pages.push(i); 
	// 	}
	// };
		

	// // Вирізаємо потрібний фрагмент даних 
	// $scope.spliceAllPosts = function (firstId) {
	// 	$scope.posts = $scope.allPosts.splice(firstId, $scope.pageSize);	
	// };
	
	
	// // USE STANDART CALLBACK
	// PostsService.getPosts(function (err, result) {
	// 	if (err) {
	// 		console.log(err);
	// 		$scope.postsErrorMesage = err;
	// 		return;
	// 	}
	// 		$scope.postsErrorMesage = null;
	// 		$scope.allPosts = result;
	// 		$scope.createPages(10);
	// 		$scope.spliceAllPosts(0);
	// 		// // console.log("Begin getPosts from post id " + firstId + " to post id " + lastId);
	// 		// console.log("pageSize = " + pageSize);
	// 		// console.log("$scope.pages = " + $scope.pages);
	// });