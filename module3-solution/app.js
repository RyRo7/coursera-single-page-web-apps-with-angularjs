(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true,
    link: FoundItemsDirective
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";

  list.getFilteredList = function () {
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

    promise.then(function (response) {
      list.items = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  list.removeItem = function (itemIndex) {
    list.items.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    .then(function (result) {
      var fullMenuList = result.data.menu_items;
      var found = [];

      if (searchTerm !== "") {
        for (var i = 0; i < fullMenuList.length; i++) {
          if (fullMenuList[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
            found.push(fullMenuList[i]);
          }
        }
      }
      return found;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };
}

})();
