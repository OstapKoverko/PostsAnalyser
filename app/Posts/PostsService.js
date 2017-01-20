app.service('PostsService', function($http) { 
  this.getPosts = function (callback, callbackError) {
    $http.get("https://jsonplaceholder.typicode.com/posts/").then(
      function (response) {
        callback(response.data);    
      },
      function (response) {
        callbackError("GetPosts method's status: " + response.status + " " + response.statusText); 
      }
    );
  };
// THIS SERVICE IS NOT USED
//   this.getPostById = function (id, callback) {
//     $http.get("https://jsonplaceholder.typicode.com/posts/" + id).then(
//       function (response) {
//         callback(response.data);    
//       },
//       function (response) {
//         callback("Status code: " + response.status);
//       });
//   };
  this.getCommentsByPostId = function (postId, callback, callbackError) {
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