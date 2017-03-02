app.service('PostsService', function($http, $filter) { 
	// USE STANDART CALLBACK
	this.getPosts = function (callback) {
		$http.get("https://jsonplaceholder.typicode.com/posts").then( 
			function onSuccess(response) {
				function setLocalStorage(posts){
					window.localStorage.timeStorage = Date.parse($filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss'));
					window.localStorage.posts = window.angular.toJson(posts);
				}
				if (!window.localStorage.timeStorage) {setLocalStorage(response.data)}
				if (Date.now() - window.localStorage.timeStorage > 300000) {setLocalStorage(response.data)}
				debugger;
				callback();
			},
			function onError(response) {
				callback(response.data);
			}
		);
	};

	// USE PROMISES
	this.savePost = function (id, data) {
		return $http.put("https://jsonplaceholder.typicode.com/posts/" + id, data);
	};
	this.getCommentsByPostId = function (postId) {
		return $http.get("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments");
	};  
});

		
	// // USE STANDART CALLBACK
	// this.getPosts = function (callback) {
	// 	$http.get("https://jsonplaceholder.typicode.com/posts").then(
	// 		function (response) {
	// 			callback(null, response.data);
	// 		} ,
	// 		function (response) {
	// 			callback("GetPosts method's status: " + response.status + " " + response.statusText);
	// 		}
	// 	);
	// };
	// this.getPosts = function (pageSize, pageNumber, callback) {
	// $http.get("https://jsonplaceholder.typicode.com/posts").then(
	// 		function (response) {
	// 			callback(null, {postsQuantity: response.data.length,
	// 				posts: response.data.splice((pageNumber * pageSize) - pageSize, pageSize)
	// 			});
	// 		} ,
	// 		function (response) {
	// 			callback("GetPosts method's status: " + response.status + " " + response.statusText);
	// 		}
	// 	);
	// };	
	// this.getPostById = function (id) {
	// 	return $http.get("https://jsonplaceholder.typicode.com/posts/" + id);
	// };
	