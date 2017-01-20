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
    }
  );
});