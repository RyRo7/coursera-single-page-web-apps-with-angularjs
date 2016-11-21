(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['items'];
function ItemsListController(items) {
  var itemslist = this;
  itemslist.items = items;
}

})();
