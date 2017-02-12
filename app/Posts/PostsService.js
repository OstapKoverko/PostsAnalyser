app.service('PostsService', function($http) { 
	// // USE PROMISES
	// this.getPosts = function () {
	// 	return $http.get("https://jsonplaceholder.typicode.com/posts");
	// };
	// USE STANDART CALLBACK
	this.getPosts = function (pageSize, pageNumber, callback) {
		$http.get("https://jsonplaceholder.typicode.com/posts").then(
			function (response) {
				callback(null, {postslength: response.data.length,
					posts: response.data.splice((pageNumber * pageSize) - pageSize, pageSize)
				});
				// getPostslength(response.data.length);
				// callback(null, response.data.splice((pageNumber * pageSize) - pageSize, pageSize));  
			} ,
			function (response) {
				callback("GetPosts method's status: " + response.status + " " + response.statusText);
			}
		);
	};	
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
