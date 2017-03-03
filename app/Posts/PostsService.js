app.service('PostsService', function($http, $filter, $q) { 
	this.getPosts = function (pageSize, pageNumber) {
    var deferred = $q.defer();
    $http.get("https://jsonplaceholder.typicode.com/posts").then(
    	function onSuccess(response) {
				caching(response.data);
				deferred.resolve({
					postsQuantity: JSON.parse(window.localStorage.posts).length,
					posts: JSON.parse(window.localStorage.posts).splice((pageNumber * pageSize) - pageSize, pageSize),
					timeStorage: window.localStorage.timeStorage
				});
			debugger;
    	},
			function onError(response) {
				deferred.reject("GetPosts method's status: " + response.status + " " + response.statusText);
			}
		);
		return deferred.promise;
	};
	function caching(posts){
		if (!window.localStorage.timeStorage || Date.now() - window.localStorage.timeStorage > 300000) {
			debugger;
			window.localStorage.timeStorage = Date.parse($filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss'));	
			window.localStorage.posts = window.angular.toJson(posts);
			debugger;
		}
	}
	this.savePost = function (id, data) {
		return $http.put("https://jsonplaceholder.typicode.com/posts/" + id, data);
	};
	this.getCommentsByPostId = function (postId) {
		return $http.get("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments");
	};  
});