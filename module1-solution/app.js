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

    if ($scope.lunchMenu == "") {
      $scope.checkLunchMessage = "Please enter data first";
      $scope.colour = "color:red";
    } else {
      var lunchList = $scope.lunchMenu.replace(findThis, ',').split(',');
      console.log(lunchList);
      $scope.checkLunchMessage = checkLunchSize(lunchList.length);
    }

  }

  function checkLunchSize(size) {
    //console.log(size);
    var response = "";

    switch (size) {
      case 1:
      case 2:
      case 3:
        response = "Enjoy!";
        $scope.colour = "color:green";
        break;
      default:
        response = "Too Much!";
        $scope.colour = "color:red";
        break;
    }

    return response;
  }
}

})();
