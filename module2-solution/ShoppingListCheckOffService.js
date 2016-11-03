angular.module('ShoppingListCheckOffServiceMod', [
  //
]).service('ShoppingListCheckOffService', function ShoppingListCheckOffService() {
  'use strict';

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

  // var responseToBuyMessage = "";
  // var responseBoughtMessage = "Nothing bought yet.";

  service.responseToBuyMessage = "";
  service.responseBoughtMessage = "Nothing bought yet.";

  service.buyItem = function (itemIndex) {
    var item = {
      name: toBuyItems[itemIndex].name,
      quantity: toBuyItems[itemIndex].quantity
    };
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
    console.log("*** toBuyItems ["+toBuyItems.length+"] boughtItems ["+boughtItems.length+"] -->", item);

    // responseToBuyMessage = (toBuyItems.length === 0) ? "Everything is bought!" : "";
    // responseBoughtMessage = (boughtItems.length === 0) ? "Nothing bought yet." : "";
    service.responseToBuyMessage = (toBuyItems.length === 0) ? "Everything is bought!" : "";
    service.responseBoughtMessage = (boughtItems.length === 0) ? "Nothing bought yet." : "";
    console.log("*** responseToBuyMessage ["+service.responseToBuyMessage+"] responseBoughtMessage ["+service.responseBoughtMessage+"]");
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  // service.getResponseToBuyMessage = function () {
  //   return responseToBuyMessage;
  // };
  // service.getResponseBoughtMessage = function () {
  //   console.log("## responseBoughtMessage ["+responseBoughtMessage+"]");
  //   return responseBoughtMessage;
  // };
});
