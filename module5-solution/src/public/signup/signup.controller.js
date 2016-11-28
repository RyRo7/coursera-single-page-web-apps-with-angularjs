(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService', 'MenuService'];
function SignUpController(UserInfoService, MenuService) {
  var $ctrl = this;
  $ctrl.userdata = {};
  var validDish = false;

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.userdata.dish)
     .then(
       function (response) {
         if (response){
            $ctrl.userdata.favouriteDish = response;
            validDish = false;
            UserInfoService.addUserToPsuedoDatabase($ctrl.userdata);
          }
        }
      )
      .catch(function (error) {
        console.log("Something went wrong");
        validDish = true;
      });
  };

  $ctrl.isDishNotValid = function () {
    return validDish;
  };

  $ctrl.isSignedUp = function () {
    return UserInfoService.isUserSignedUp;
  };

}

})();
