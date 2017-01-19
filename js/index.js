var app = angular.module('myApp', ["ngRoute"]);


app.service('PostsService', function($http) {
  
  this.getPosts = function (callback, callbackError) {
    $http.get("https://jsonplaceholder.typicode.com/posts/").then(
      function (response) {
        callback(response.data);    
      },
      function (response) {
        callbackError("GetPosts method's status code: " + response.status); 
      });
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
        callbackError("GetCommentsByPostId method's status code: " + response.status);
      });
  };
  
});


app.controller('postsController', function($scope, PostsService) {

  PostsService.getPosts(
  function(result){
    $scope.posts = result;
  }, 
  function(result){
    console.log(result);
  });
    
});


app.controller('postController', function($scope, $routeParams, PostsService){

//  THIS METHOD IS NOT USED
//   PostsService.getPostById(5, function(result){
//     $scope.postById = result;
//   });
  
  PostsService.getCommentsByPostId(
  $routeParams.id, 
  function(result){
    $scope.commentsByPostId = result;
    console.log("PostId: " + $routeParams.id);
  },
  function(result){
    console.log(result);  
  });

});


app.config(function($routeProvider) {
  $routeProvider
        
    .when("/postList", {
      template : "<table>   <tr ng-repeat= \"x in posts\"> <td> {{ x.userId }} </td>    <td>  <a href=\"#{{ x.id }}\">     {{ x.id }}  </a> </td>  <td>{{ x.title }}</td>    <td>{{ x.body }}</td>  </tr>    </table>",
      controller : "postsController"
    })
  
    .when("/:id", {
      template : "<table>  <tr ng-repeat= \"x in commentsByPostId\"> <td>{{ x.postId }}</td>    <td>{{ x.id }}</td>    <td>{{ x.name }}</td>    <td>{{ x.email }}</td> <td>{{ x.body }}</td>  </tr></table> ",
      controller : "postController"
    });
  
});
