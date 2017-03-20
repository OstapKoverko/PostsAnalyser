app.service('LocalStorageService', function($filter) {
  
  this.caching = function (posts) {
		if (!window.localStorage.timeStorage || Date.now() - window.localStorage.timeStorage > 300000) {
			window.localStorage.timeStorage = Date.parse($filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss'));	
			window.localStorage.posts = window.angular.toJson(posts);
			debugger;
		}
  };
  
  this.getCachedPosts = function (pageSize, pageNumber, callback) {
  	callback({
  	  postsQuantity: JSON.parse(window.localStorage.posts).length,
  		posts: JSON.parse(window.localStorage.posts).splice((pageNumber * pageSize) - pageSize, pageSize),
  		timeStorage: window.localStorage.timeStorage
  	});
  };
  
})