app.controller('postsController', function($scope, PostsService) {
  PostsService.getPosts(
    function(result){
      $scope.posts = result;
    }, 
    function(result){
      console.log(result);
    }
  );  
});