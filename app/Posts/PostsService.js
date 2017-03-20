app.service('PostsService', function($http, $q, LocalStorageService, WebSQLService) { 
	this.getPosts = function (pageSize, pageNumber, storage) {
    var deferred = $q.defer();
    if (storage == 'WebSQL') {
    	// WEB SQL
    	debugger;
	    $http.get("https://jsonplaceholder.typicode.com/posts").then(
	    	function onSuccess(response) {
	    		WebSQLService.caching(response.data);
	    		WebSQLService.getCachedPosts(pageSize, pageNumber, function (result) {
	    			deferred.resolve(result);
	    		});
	    		debugger;
	    	},
	    	function onError(response) {
					deferred.reject("GetPosts method's status: " + response.status + " " + response.statusText);
				}
			);
    } else {
			// LOCAL STORAGE
			debugger;
			$http.get("https://jsonplaceholder.typicode.com/posts").then(
				function onSuccess(response) {
					LocalStorageService.caching(response.data);
					LocalStorageService.getCachedPosts(pageSize, pageNumber, function (result) {
						deferred.resolve(result);						
					});
					debugger;
	  		},
	  		function onError(response) {
					deferred.reject("GetPosts method's status: " + response.status + " " + response.statusText);
				}
			);
    }
		return deferred.promise;
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