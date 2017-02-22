var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider  
    .when("/", {
      templateUrl : "app/Posts/posts.html",
      controller : "postsController"
    }) 
    .when("/posts", {
      templateUrl : "app/Posts/posts.html",
      controller : "postsController"
    })  
    .when("/posts/:id", {
      templateUrl : "app/Posts/post.html",
      controller : "postController"
    });  
});
    