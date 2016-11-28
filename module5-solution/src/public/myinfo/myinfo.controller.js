(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService', 'myInfo'];
function MyInfoController(UserInfoService, myInfo) {
  var $ctrl = this;

  $ctrl.getUserInfo = function () {
    console.log("MyInfoController :: $ctrl.submit");
    return UserInfoService.getUserFromPsuedoDatabase();
  };

  $ctrl.isSignedUp = function () {
    return UserInfoService.isUserSignedUp;
  };

}

})();
