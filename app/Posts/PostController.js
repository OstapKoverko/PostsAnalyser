app.controller('postController', function($scope, $routeParams, PostsService){
  PostsService.getPostById(
    $routeParams.id,
    function getPostById(result){
      $scope.post = result;
    },
    function printError(result){
      console.log(result);  
    }
  ); 
  PostsService.getCommentsByPostId(
    $routeParams.id, 
    function getCommentsByPostId(result){
      $scope.comments = result;
      console.log("PostId: " + $routeParams.id);
    },
    function printError(result){
      console.log(result);  
    }
  );
});