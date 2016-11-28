(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService', 'MenuService'];
function SignUpController(UserInfoService, MenuService) {
  var $ctrl = this;
  $ctrl.userdata = {};

  $ctrl.submit = function () {
    UserInfoService.addUserToPsuedoDatabase($ctrl.userdata);
  };

  $ctrl.isSignedUp = function () {
    return UserInfoService.isUserSignedUp;
  };
}

})();
