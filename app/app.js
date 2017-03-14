var app = window.angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, styleSwitcherProvider) {
  if (styleSwitcherProvider.framework == "material") {
    $routeProvider  
    .when("/", {
      templateUrl : "app/Posts/postsMaterial.html",
      controller : "postsController"
    }) 
    .when("/posts", {
      templateUrl : "app/Posts/postsMaterial.html",
      controller : "postsController"
    })  
    .when("/posts/:id", {
      templateUrl : "app/Posts/postMaterial.html",
      controller : "postController"
    });
  }  else {
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
