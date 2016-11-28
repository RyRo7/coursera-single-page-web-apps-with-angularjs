(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService', 'MenuService'];
function SignUpController(UserInfoService, MenuService) {
  var $ctrl = this;
  $ctrl.userdata = {};

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.userdata.dish)
     .then(
       function (response) {
          $ctrl.userdata.favouriteDish = response;
          console.log("*** adding this to the service:", $ctrl.userdata);
          UserInfoService.addUserToPsuedoDatabase($ctrl.userdata);
        }
      );
  };

  $ctrl.isSignedUp = function () {
    return UserInfoService.isUserSignedUp;
  };


}

})();
