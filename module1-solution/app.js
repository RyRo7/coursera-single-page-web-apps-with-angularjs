(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.checkLunchMessage = "";

  $scope.CheckLunch = function() {
    console.log($scope.lunchMenu);
    var findThis = /,\s*,/g;
    //replace removes any possible white space between separators, as well as removing any 'null' items in the lunch list
    //the flag g=global match; find all matches rather than stopping after the first match
    //split iterates through lunch list and creates the array of lunch items
    var lunchList = $scope.lunchMenu.replace(findThis, ',').split(',');
    console.log(lunchList);
    $scope.checkLunchMessage = checkLunchSize(lunchList.length);
  }

  function checkLunchSize(size) {
    //console.log(size);
    var response = "";
    if (size < 3) {
      response = "Still good. Keep adding to the food pile!";
    } else if (size == 3) {
      response = "At the limit for what your plate can hold. Best not to add anymore";
    } else if (size > 3) {
      response = "Woah there tubby! Got quite a plate full there - put something back!";
    }
    return response;
  }
}

})();