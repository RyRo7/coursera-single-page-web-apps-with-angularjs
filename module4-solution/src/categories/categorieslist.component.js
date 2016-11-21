(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/categories/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
