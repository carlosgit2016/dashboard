var App = angular.module('controllers', []);

App.controller('CadastrosCtrl', function ($scope, $location, $route) {
    $scope.onView = function (view) {
        switch (view) {
            case 'clientes':
                $location.path('/cadastro/cliente')
                break;
            case 'tiposDeVeiculos':
                $location.path('/cadastro/tipo-veiculo')
                break;
            default:
                throw new Error('Problem, dont find path');
        }
    }
});

App.controller("ListClienteCtrl", function ($scope, $http, ClientesService, $routeParams, $location) {
    $scope.clientes = [];
    $scope.notFound = false;
    ClientesService.list().then(function (data) {
        $scope.clientes = data.data;
        if ($scope.clientes.length === 0) {
            $scope.notFound = true;
        }
    });

    $scope.deletar = function (cliente) {
        ClientesService.delete(cliente).then(function (data) {
            $location.path('/clientes/list/delete-sucess');
        })
    }
})

App.controller("MinerioCtrl", function ($scope, MinerioService) {
    $scope.minerios = [];
    $scope.notFound = false;
    MinerioService.list().then(function (data) {
        $scope.minerios = data.data;
        if ($scope.minerios.length === 0) {
            $scope.notFound = true;
        }
    })

    $scope.deletar = function (minerio) {
        TipoVeiculoService.delete(minerio).then(function (data) {
            $location.path('/minerio/list/delete-sucess');
        })
    }
})

App.controller("ListTipoVeiculoCtrl", function ($scope, TipoVeiculoService) {
    $scope.tipoDeVeiculos = [];
    $scope.notFound = false;
    TipoVeiculoService.list().then(function (data) {
        $scope.tipoDeVeiculos = data.data;
        if ($scope.tipoDeVeiculos.length === 0) {
            $scope.notFound = true;
        }
    })

    $scope.deletar = function (tipoDeVeiculo) {
        TipoVeiculoService.delete(tipoDeVeiculo).then(function (data) {
            $location.path('/tipo-de-veiculo/list/delete-sucess');
        })
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