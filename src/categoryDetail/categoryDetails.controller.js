(function() {
'use strict';

angular.module('MenuApp')
    .controller('CategoryDetailsController', CategoryDetailsController);

CategoryDetailsController.$inject = ['category'];
function CategoryDetailsController(categoryDetails) {
    var ctrl = this;

    console.log(categoryDetails);

    ctrl.items = categoryDetails.menu_items;
    ctrl.categoryName = categoryDetails.category.name;
}
})();