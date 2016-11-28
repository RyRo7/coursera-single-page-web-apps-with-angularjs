(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService', 'ApiPath'];
function MyInfoController(UserInfoService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;  

  $ctrl.getUserInfo = function () {
    return UserInfoService.getUserFromPsuedoDatabase();
  };

  $ctrl.isSignedUp = function () {
    return UserInfoService.isUserSignedUp;
  };
}

})();
