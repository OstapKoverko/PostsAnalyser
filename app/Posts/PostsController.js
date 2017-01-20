app.controller('postsController', function($scope, PostsService) {
  PostsService.getPosts(
    function getPosts(result){
      $scope.posts = result;
    }, 
    function printError(result){
      console.log(result);
    }
  );  
});