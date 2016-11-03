angular.module('ToBuyControllerMod', [
  'ShoppingListCheckOffServiceMod',
]).controller('ToBuyController', function ToBuyController(
  ShoppingListCheckOffService
) {
  'use strict';

  var showToBuyList = this;
  showToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  showToBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
    //showToBuyList.responseToBuyMessage = ShoppingListCheckOffService.getResponseToBuyMessage();
    showToBuyList.responseToBuyMessage = ShoppingListCheckOffService.responseToBuyMessage;
  };
});
