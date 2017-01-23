app.controller('postsController', function($scope, PostsService) {
  PostsService.getPosts(
    function(err, result) {
      console.log(err),
      $scope.posts = result;
    }
    // function getPosts(result){
    //   $scope.posts = result;
    // }, 
    // function printError(result){
    //   console.log(result);
    // }
  );  
});