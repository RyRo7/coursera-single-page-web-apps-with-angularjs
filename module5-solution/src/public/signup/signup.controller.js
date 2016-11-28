(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService', 'MenuService'];
function SignUpController(UserInfoService, MenuService) {
  var $ctrl = this;
  $ctrl.userdata = {};
  $ctrl.isDishNotValid = true;

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.userdata.dish)
     .then(
       function (response) {
         if (response){
            $ctrl.userdata.favouriteDish = response;
            $ctrl.isDishNotValid = false;
            UserInfoService.addUserToPsuedoDatabase($ctrl.userdata);
          }
        }
      );
  };

  $ctrl.isSignedUp = function () {
    return UserInfoService.isUserSignedUp;
  };

}

})();
