var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider  
  .when("/postsList", {
    templateUrl : "posts.html",
    controller : "postsController"
  })  
  .when("/posts/:id", {
    templateUrl : "post.html",
    controller : "postController"
  });  
});
