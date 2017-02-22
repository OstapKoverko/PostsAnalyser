app.controller('postsController', function($scope, PostsService) {
	$scope.pageNumber = 1;
	$scope.pageSize = 10;
	$scope.setPageSize = function (pageSize) {
		$scope.pageSize = pageSize;
		getPostsService();
	};
	$scope.onSelectPage = function (pageNumber) {
		$scope.pageNumber = pageNumber;
		getPostsService();
	};
	// USE STANDART CALLBACK
	function getPostsService () {
		PostsService.getPosts($scope.pageSize, $scope.pageNumber,
			function(err, result) {
				if (err) {
					console.log(err);
					$scope.postsErrorMesage = err;
					return;
				}
				$scope.postsErrorMesage = null;
				$scope.posts = result.posts;
				$scope.postsQuantity = result.postsQuantity;
			}
		);
	}
	getPostsService();
	

	    
		
	// Material Design Lite will automatically register and render all elements
	// marked with MDL classes upon page load. However in the case where you are 
	// creating DOM elements dynamically you need to register new elements 
	// using the upgradeElement function. Here is how you can dynamically create 
	// the same raised button with ripples shown in the section above:
	
	// var button = document.createElement('button');
	// var textNode = document.createTextNode('Click Me!');
	// button.appendChild(textNode);
	// button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
	// componentHandler.upgradeElement(button);
	// document.getElementById('container').appendChild(button);	
	
	//   var syncMDL = function() {
  //     componentHandler.syncElementsThatCssClassChanged();
  //   };
  //   syncMDL();
	
});