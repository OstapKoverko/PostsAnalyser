app.service('PostsService', function($http) { 
	// USE PROMISES
	this.getPosts = function () {
		return $http.get("https://jsonplaceholder.typicode.com/posts");
	};
		// Я тепер все більше розумію чим кращі promises :)))
	// USE STANDART CALLBACK
	// this.getPosts = function (pageSize, pageNumber, postslength, callback) {
	// 	$http.get("https://jsonplaceholder.typicode.com/posts").then(
	// 		function (response) {
	// 			callback(null, response.data.splice((pageNumber * pageSize) - pageSize, pageSize));  
	// 		} ,
	// 		function (response) {
	// 			callback("GetPosts method's status: " + response.status + " " + response.statusText);
	// 		}
	// 	);
	// };	
	this.getPostById = function (id) {
		return $http.get("https://jsonplaceholder.typicode.com/posts/" + id);
	};
	this.savePost = function (id, data) {
		return $http.put("https://jsonplaceholder.typicode.com/posts/" + id, data);
	};
	this.getCommentsByPostId = function (postId) {
		return $http.get("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments");
	};  
});