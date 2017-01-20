var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider  
  .when("/posts", {
    templateUrl : "posts.html",
    controller : "postsController"
  })  
  .when("/posts/:id", {
    templateUrl : "post.html",
    controller : "postController"
  });  
});
