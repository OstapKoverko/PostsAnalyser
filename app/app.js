var app = window.angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, styleSwitcherProvider) {
  if (styleSwitcherProvider.materialDesign) {
    $routeProvider  
    .when("/", {
      templateUrl : "app/Posts/postsMDL.html",
      controller : "postsController"
    }) 
    .when("/posts", {
      templateUrl : "app/Posts/postsMDL.html",
      controller : "postsController"
    })  
    .when("/posts/:id", {
      templateUrl : "app/Posts/postMDL.html",
      controller : "postController"
    });
  } else {
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
  } 
});
