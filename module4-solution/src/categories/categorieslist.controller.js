(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['MenuDataService', 'items'];

function CategoriesListController(MenuDataService, items) {
  var categorieslist = this;
  categorieslist.categories = items;
}

})();
