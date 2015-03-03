var app = angular.module("buzz",['wu.masonry']);

app.controller("buzzwordController", function($scope){
  $scope.buzzwords = [];

  $scope.add = function(newBuzzword){
    var result = $.grep($scope.buzzwords, function(e){ return e.name === newBuzzword; });

    if (result.length === 0) {
      if (newBuzzword.length > 0) {
        $scope.buzzwords.push({
          name: newBuzzword,
          count: 1
        });
      }
    } else {
      $scope.increment(result[0]);
    }

    $scope.newBuzzword = "";
  };

  $scope.increment = function(buzzword){
    buzzword.count += 1;
  };

  $scope.reduce = function(buzzword){
    if (buzzword.count > 0) {
      buzzword.count -= 1;
    }
  };

});