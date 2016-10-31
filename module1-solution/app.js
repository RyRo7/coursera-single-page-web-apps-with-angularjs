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
    if (lunchList == null) {
      $scope.checkLunchMessage = "Please enter data first!";
    } else {
      $scope.checkLunchMessage = checkLunchSize(lunchList.length);
    }
  }

  function checkLunchSize(size) {
    //console.log(size);
    var response = "";

    switch (size) {
      case 0:
        response = "Please enter data first";
        break;
      case 1:
      case 2:
        response = "Still good. Keep adding to the food pile!";
        break;
      case 3:
        response = "At the limit for what your plate can hold. Best not to add any more";
        break;
      default:
        response = "Woah there tubby! Got quite a plate full there - put something back!";
        break;
    }

    return response;
  }
}

})();
