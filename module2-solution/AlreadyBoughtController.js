angular.module('AlreadyBoughtControllerMod', [
  'ShoppingListCheckOffServiceMod',
]).controller('AlreadyBoughtController', function AlreadyBoughtController(ShoppingListCheckOffService) {
  'use strict';

  var showBoughtList = this;
  showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
  //showBoughtList.responseBoughtMessage = ShoppingListCheckOffService.getResponseBoughtMessage();
  showBoughtList.responseBoughtMessage = ShoppingListCheckOffService.responseBoughtMessage;
});
