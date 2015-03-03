var app = angular.module("buzz",['wu.masonry']);

app.controller("buzzwordController", function($scope, $timeout){
  $scope.buzzwords = [];

  $scope.add = function(newBuzzword){
    var result = $.grep($scope.buzzwords, function(e){ return e.name === newBuzzword; });

    if (result.length === 0) {
      if (newBuzzword.length > 0) {
        $scope.buzzwords.push({
          name: newBuzzword,
          count: 1,
          editing: false
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

  $scope.edit = function(buzzword){
    buzzword.editing = true;
    $timeout(function(){
      $('.buzzwords').masonry();
    },0);
  };

  $scope.update = function(buzzword){
    buzzword.editing = false;
    $timeout(function(){
      $('.buzzwords').masonry();
    },0);
  };

})

// //Credit for ngBlur and ngFocus to https://github.com/addyosmani/todomvc/blob/master/architecture-examples/angularjs/js/directives/
.directive('ngBlur', function() {
  return function( scope, elem, attrs ) {
    elem.bind('blur', function() {
      scope.$apply(attrs.ngBlur);
    });
  };
})

.directive('ngFocus', function( $timeout ) {
  return function( scope, elem, attrs ) {
    scope.$watch(attrs.ngFocus, function( newval ) {
      if ( newval ) {
        $timeout(function() {
          elem[0].focus();
        }, 0, false);
      }
    });
  };
});