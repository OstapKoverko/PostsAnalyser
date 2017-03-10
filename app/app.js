var app = window.angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, styleSwitcherProvider) {
  if (styleSwitcherProvider.materialDesign) {
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
    })
    .when("/framework: 'material'", {
      templateUrl : "app/Posts/postsMDL.html",
      controller : "postController"
    });
  } 

  // .when("/", {
  //     templateUrl : "app/Posts/posts.html",
  //     controller : "postsController"
  //   })
  // .when("/posts/:framework", {
  //     templateUrl :  function(params){
  //       return 'app/Posts/posts' + params.framework + '.html';
  //     },
  //     controller : "postController"
  //   });
});
