(function () {
"use strict";

angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/myinfo/my-info.html',
  bindings: {
    info: '<'
  }
});



})();
