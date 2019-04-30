var AppComponents = angular.module('components', []);

AppComponents.component('app', {
    templateUrl: "../components/comp/test.html",
    controller: function PhoneListController() {
        this.name = "carlos"
    }
})
