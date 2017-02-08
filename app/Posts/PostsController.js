app.controller('postsController', function($scope, PostsService) {
	
	// Прописав тут значення змінних, бо вже п'ятий день не можу отримати дані із posts.html
	// А коли прибираю це присвоєння, то змінні = undefine  
	$scope.pageSize = 10;
	$scope.pageNumber = 3;
	
	
	// USE STANDART CALLBACK
	PostsService.getPosts($scope.pageSize, $scope.pageNumber, function (err, result) {
		if (err) {
			console.log(err);
			$scope.postsErrorMesage = err;
			return;
		}
			$scope.postsErrorMesage = null;
			$scope.posts = result;
	
			
			// Створюємо масив з номерами сторінок
			$scope.pages = [];
			for (var i = 1; i <= result.length / $scope.applpageSize; i++) {
				$scope.pages.push(i); 
			}

	});	

	console.log("pageSize = " + $scope.pageSize);
	console.log("pageNumber = " + $scope.pageNumber);
	console.log("$scope.pages = " + $scope.pages);

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