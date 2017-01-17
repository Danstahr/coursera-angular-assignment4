(function() {
'use strict';

angular.module('MenuApp')
    .controller('CategoriesRouterController', CategoriesRouterController);

CategoriesRouterController.$inject = ['categories'];
function CategoriesRouterController(categories) {
    var categoriesCtrl = this;

    console.log(categories);

    categoriesCtrl.categories = categories;
}
})();