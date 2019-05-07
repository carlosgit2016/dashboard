var App = angular.module('controllers', []);

App.controller('CadastrosCtrl', function ($scope, $location, $route) {
    $scope.onView = function (view) {
        switch (view) {
            case 'clientes':
                $location.path('/cadastro/cliente');
                break;
            case 'tiposDeVeiculos':
                $location.path('/cadastro/tipo-veiculo');
                break;
            case 'minerio':
                $location.path('/cadastro/minerio');
                break;
            case 'pedidos':
                $location.path('/cadastro/pedido');
                break;
            case 'veiculos':
                $location.path('/cadastro/veiculo');
                break;
            default:
                throw new Error('Problem, dont find path');
        }
    }
});

App.controller("ListClienteCtrl", function ($scope, ClientesService, PassDataBeteewenPages, $location) {
    $scope.clientes = [];
    $scope.notFound = false;
    ClientesService.list().then(function (data) {
        $scope.clientes = data.data;
        if ($scope.clientes.length === 0) {
            $scope.notFound = true;
        }
    });
    $scope.editar = function (cliente) {
        PassDataBeteewenPages.set(cliente);
        $location.path('/cliente/controlar')
    }

    $scope.deletar = function (cliente) {
        ClientesService.delete(cliente).then(function (data) {
            $location.path('/clientes/list/delete-sucess');
        })
    }
})

App.controller("MinerioCtrl", function ($scope, MinerioService, PassDataBeteewenPages, $location) {
    $scope.minerios = [];
    $scope.notFound = false;
    MinerioService.list().then(function (data) {
        data.data.forEach(function (v) {
            v.valor_grama = v.valor_grama.toFixed(2);
        });
        $scope.minerios = data.data;
        if ($scope.minerios.length === 0) {
            $scope.notFound = true;
        }
    })

    $scope.editar = function (minerio) {
        PassDataBeteewenPages.set(minerio);
        $location.path('/minerio/controlar')
    }

    $scope.deletar = function (minerio) {
        MinerioService.delete(minerio).then(function (data) {
            $location.path('/minerio/list/delete-sucess');
        })
    }
})

App.controller("ListTipoVeiculoCtrl", function ($scope, TipoVeiculoService, PassDataBeteewenPages, $location) {
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
});

App.controller("PedidosCtrl", function ($scope, PedidoService, PassDataBeteewenPages, $location) {
    $scope.pedidos = [];
    $scope.notFound = false;
    PedidoService.list().then(function (data) {
        $scope.pedidos = data.data;
        if ($scope.pedidos.length === 0) {
            $scope.notFound = true;
        }
    })

    $scope.editar = function (minerio) {
        PassDataBeteewenPages.set(minerio);
        $location.path('/pedido/controlar')
    }

    $scope.deletar = function (pedido) {
        PedidoService.delete(pedido).then(function (data) {
            $location.path('/tipo-de-veiculo/list/delete-sucess');
        })
    }
});

App.controller("VeiculosCtrl", function ($scope, VeiculoService, PassDataBeteewenPages, $location) {
    $scope.veiculos = [];
    $scope.notFound = false;
    VeiculoService.list().then(function (data) {
        $scope.veiculos = data.data;
        if ($scope.veiculos.length === 0) {
            $scope.notFound = true;
        }
    })

    $scope.deletar = function (veiculo) {
        VeiculoService.delete(veiculo).then(function (data) {
            $location.path('/tipo-de-veiculo/list/delete-sucess');
        })
    }
});


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