app.service('WebSQLService', function() {
  var db = window.openDatabase('POSTS', '1.0', 'DB for posts caching', 2 * 1024 * 1024);
  
  this.caching = function (posts) {
		db.transaction(function (tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS POSTS (timeStorage, posts)');
			tx.executeSql("SELECT * FROM POSTS", [], function(tx, result) {
				var i = result.rows.length - 1;
				if (i == -1 || Date.now() - result.rows.item(i)['timeStorage'] > 300000) {
			 		tx.executeSql("INSERT INTO POSTS (timeStorage, posts) values(?, ?)",
		  			[new Date().getTime(), window.angular.toJson(posts)], null, null
		  		);
		  		debugger;
				}
			});
		});
  };
  
  this.getCachedPosts = function (pageSize, pageNumber, callback) {
		db.transaction(function (tx) {
			tx.executeSql("SELECT * FROM POSTS", [], function(tx, result) {
				var k = result.rows.length - 1;
				callback({
					postsQuantity: JSON.parse(result.rows.item(k)['posts']).length,
					posts: JSON.parse(result.rows.item(k)['posts']).splice((pageNumber * pageSize) - pageSize, pageSize),
					timeStorage: result.rows.item(k)['timeStorage']
				});
			});
		});
  };
  
});