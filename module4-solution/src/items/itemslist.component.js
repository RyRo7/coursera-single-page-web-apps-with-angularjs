(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/items/itemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();
