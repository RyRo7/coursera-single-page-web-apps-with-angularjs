(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      //url: (ApiBasePath + "/categories.json"),
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    })
    .then(function (result) {
      return result.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
     method: 'GET',
     //url: (ApiBasePath + "/menu_items.json"),
     url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
     params: {
       category: categoryShortName
     }
   }).then(function (result) {
     return result.data.menu_items;
   })
   .catch(function (error) {
     console.log("Something went terribly wrong.");
   });
  };
}

})();
