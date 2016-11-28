(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


function UserInfoService() {
  var service = this;

  service.isUserSignedUp = false;

  service.addUserToPsuedoDatabase = function (userdata) {
    //replace this line possibly with a submission to a backend storage system - DB?
    service.userdata = userdata;
    service.isUserSignedUp = true;
  };

  service.getUserFromPsuedoDatabase = function () {
    return service.userdata;
  };
}

})();
