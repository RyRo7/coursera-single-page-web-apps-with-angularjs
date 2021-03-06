(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.checkLunchMessage = "";
  $scope.borderstyle = "";

  $scope.CheckLunch = function() {
    if ($scope.lunchMenu == "") {
      $scope.checkLunchMessage = "Please enter data first";
      $scope.colour = "red";
      $scope.bordercolour = "solid 2px red";
    } else {
      var findThis = /,\s*,/g;
      //the flag g=global match; find all matches rather than stopping after the first match

      //replace removes any possible white space between separators, as well as removing any 'null' items in the lunch list
      //split iterates through lunch list and creates the array of lunch items
      var lunchList = $scope.lunchMenu.replace(findThis, ',').split(',');
      $scope.checkLunchMessage = checkLunchSize(lunchList.length);
      $scope.bordercolour = "solid 2px green";
    }
  }

  function checkLunchSize(size) {
    var response = "";
    switch (size) {
      case 1:
      case 2:
      case 3:
        response = "Enjoy!";
        $scope.colour = "green";
        break;
      default:
        response = "Too Much!";
        $scope.colour = "red";
        break;
    }
    return response;
  }
}

})();
