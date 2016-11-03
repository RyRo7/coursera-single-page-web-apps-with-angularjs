(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showToBuyList = this;
  showToBuyList.items = ShoppingListCheckOffService.toBuyItems;

  showToBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBoughtList = this;
  showBoughtList.items = ShoppingListCheckOffService.boughtItems;
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var toBuyItems = [
    { name: "Milk", quantity: "2" },
    { name: "Donuts", quantity: "200" },
    { name: "Cookies", quantity: "300" },
    { name: "Chocolate", quantity: "5" },
    { name: "Peanut Butter", quantity: "2" }
  ];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = {
      name: toBuyItems[itemIndex].name,
      quantity: toBuyItems[itemIndex].quantity
    };
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.toBuyItems = toBuyItems;
  service.boughtItems = boughtItems;
}
})();
