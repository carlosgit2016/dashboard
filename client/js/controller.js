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

    $scope.adicionar = function () {
        $location.path('/cliente/controlar');
    }

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

    $scope.adicionar = function () {
        $location.path('/minerio/controlar');
    }

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

    $scope.adicionar = function () {
        $location.path('/tipo-veiculos/controlar');
    }

    $scope.editar = function (tipoDeVeiculo) {
        PassDataBeteewenPages.set(tipoDeVeiculo);
        $location.path('/tipo-veiculos/controlar')
    }

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

    $scope.adicionar = function () {
        $location.path('/pedido/controlar');
    }

    $scope.editar = function (minerio) {
        PassDataBeteewenPages.set(minerio);
        $location.path('/pedido/controlar')
    }

    $scope.deletar = function (pedido) {
        PedidoService.delete(pedido).then(function (data) {
            var indexElement = $scope.pedidos.findIndex(function (e) {
                return e.id_pedido === pedido.id_pedido;
            })
            $scope.pedidos.splice(indexElement, 1);
            alert('Deletado com sucesso');
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

    $scope.adicionar = function () {
        $location.path('/veiculo/controlar');
    }

    $scope.editar = function (veiculo) {
        PassDataBeteewenPages.set(veiculo);
        $location.path('/veiculo/controlar')
    }

    $scope.deletar = function (veiculo) {
        VeiculoService.delete(veiculo).then(function (data) {
            alert('deletado com sucesso');
        })
    }
});

App.controller("GraphCtrl", function ($scope, VeiculoService) {
    //Quantidade de Veiculo por tipo
    VeiculoService.list().then(function (data) {
        var veiculos = data.data;
        var tiposDeVeiculos = [];
        var graphObject = {
            labels: [],
            data: []
        };
        veiculos.forEach(function (veiculo) {
            var existElement = tiposDeVeiculos.find(function (tipoDeVeiculo) {
                return tipoDeVeiculo.id_tipo_veiculo === veiculo.tipoVeiculo.id_tipo_veiculo;
            });
            if (!existElement) tiposDeVeiculos.push(veiculo.tipoVeiculo);
        })

        graphObject.labels = tiposDeVeiculos.map(function (tipoDeVeiculo) {
            return tipoDeVeiculo.nome;
        });

        tiposDeVeiculos.forEach(function (tipoDeVeiculo) {
            graphObject.data.push(veiculos.filter(function (veiculo) {
                return veiculo.tipoVeiculo.id_tipo_veiculo === tipoDeVeiculo.id_tipo_veiculo;
            }).length)
        });

        $scope.labels = graphObject.labels;
        $scope.series = ['Carro'];
        $scope.data = [graphObject.data];


    })

});