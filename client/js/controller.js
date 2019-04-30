var App = angular.module('controllers', []);

App.controller("ClienteCtrl", function ClienteCtrl() {
    this.cliente = {
        name: "Carlos"
    }
})


App.controller("GraphCtrl", function ($scope) {

    $scope.labels = ["Ouro", "Prata", "Talco", "Gipsita", "Fluorita", "Apatita", "Apatita", "Quartzo", "Quartzo"];
    $scope.series = ['Janeiro', 'Fevereiro', 'Março'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [50, 40, 30, 90, 15, 75, 98],
        [17, 45, 23, 11, 30, 20, 58]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});
