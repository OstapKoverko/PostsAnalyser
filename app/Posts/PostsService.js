app.service('PostsService', function($http) { 
	// USE STANDART CALLBACK
	this.getPosts = function (callback) {
		$http.get("https://jsonplaceholder.typicode.com/posts/").then(
			function (response) {
				callback(null, response.data);  
			} ,
			function (response) {
				callback("GetPosts method's status: " + response.status + " " + response.statusText);	    
			}
		);
	};	
	// USE PROMISES
	this.getPostById = function (id) {
		return $http.get("https://jsonplaceholder.typicode.com/posts/" + id);
	};
	this.postPostById = function (data) {
		console.log("$http.get - done!");
		return $http.get("https://jsonplaceholder.typicode.com/posts/", data);
	};
	this.getCommentsByPostId = function (postId) {
		return $http.get("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments");
	};  
});