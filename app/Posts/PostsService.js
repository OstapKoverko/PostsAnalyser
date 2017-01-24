app.service('PostsService', function($http) { 
	this.getPosts = function (callback) {
		// USE STANDART CALLBACK
		$http.get("https://jsonplaceholder.typicode.com/posts").then(
			function (response) {
				callback(false, response.data);  
			} ,
			function (response) {
				callback("GetPosts method's status: " + response.status + " " + response.statusText, false);	    
			}
		);
	};	
	// this.getPosts = function (callback, callbackError) {
	// 	$http.get("https://jsonplaceholderr.typicode.com/posts/").then(
	// 		function (response) {
	// 			callback(response.data);    
	// 		},
	// 		function (response) {
	// 			callbackError("GetPosts method's status: " + response.status + " " + response.statusText); 
	// 		}
	// 	);
	// };
	this.getPostById = function (id, callback, callbackError) {
		// USE PROMISES
		$http.get("https://jsonplaceholder.typicode.com/posts/" + id).then(
			function (response) {
				callback(response.data);
			},
			function (response) {
				callbackError("GetPostById method's status: " + response.status + " " + response.statusText);
			});
	};
	this.getCommentsByPostId = function (postId, callback, callbackError) {
		// USE PROMISES
		$http.get("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments").then(
			function (response) {
				callback(response.data);    
			}, 
			function (response) {
				callbackError("GetCommentsByPostId method's status: " + response.status + " " + response.statusText);
			}
		);
	};  
});