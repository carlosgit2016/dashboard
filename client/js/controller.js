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
        PassDataBeteewenPages.clear();
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
        PassDataBeteewenPages.clear();
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
        PassDataBeteewenPages.clear();
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
        PassDataBeteewenPages.clear();
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
        PassDataBeteewenPages.clear();
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

App.controller("GraphCtrl", function ($scope, VeiculoService, PedidoService, $rootScope) {
    //Quantidade de Veiculo por tipo

    //Setando o eixo y para iniciar com valor 0
    $scope.options = {
        scales: {
            yAxes: [{ id: 'y-axis-1', ticks: { min: 0 } }]
        }
    }

    VeiculoService.list().then(function (data) {
        var veiculos = data.data;
        var tiposDeVeiculos = [];
        veiculos.forEach(function (veiculo) {
            var existElement = tiposDeVeiculos.find(function (tipoDeVeiculo) {
                return tipoDeVeiculo.id_tipo_veiculo === veiculo.tipoVeiculo.id_tipo_veiculo;
            });
            if (!existElement) tiposDeVeiculos.push(veiculo.tipoVeiculo);
        })

        var labels = tiposDeVeiculos.map(function (tipoDeVeiculo) {
            return tipoDeVeiculo.nome;
        });

        var data = [];
        tiposDeVeiculos.forEach(function (tipoDeVeiculo) {
            data.push(veiculos.filter(function (veiculo) {
                return veiculo.tipoVeiculo.id_tipo_veiculo === tipoDeVeiculo.id_tipo_veiculo;
            }).length)
        });

        mountGraph('chart-bar', 'veiculo', { labels, data, series: ['Quantidade de veiculos'] }, $scope);

    });

    PedidoService.list().then(function (data) {
        var pedidos = data.data;
        var mineriosNosPedidos = _.groupBy(pedidos, function (pedido) {
            return pedido.minerio.nome;
        });
        var totalPorMinerios = _.map(mineriosNosPedidos, function (pedidos) {
            pedidos.total = _.map(pedidos, function (pedido) {
                return parseFloat(pedido.total);
            });
            return _.reduce(pedidos.total, function (sum, n) {
                return sum + n;
            }, 0);
        });

        mineriosNosPedidos = Object.getOwnPropertyNames(mineriosNosPedidos);
        var labels = mineriosNosPedidos;
        var data = totalPorMinerios;

        mountGraph('chart-bar', 'minerio', { labels, data, series: ['Quantidade de minerios'] }, $scope);

    })

    PedidoService.list().then(function (data) {
        var pedidos = data.data;
        var clientesPorPedido = _.groupBy(pedidos, function (pedido) {
            return pedido.cliente.nome;
        });
        console.log(clientesPorPedido);

        var totalDeClientes = _.map(clientesPorPedido, function (pedidos) {
            return pedidos.length;
        });

        clientesPorPedido = Object.getOwnPropertyNames(clientesPorPedido);
        var labels = clientesPorPedido;
        var data = totalDeClientes;

        mountGraph('chart-bar', 'cliente', { labels, data, series: ['Quantidade de clientes'] }, $scope);

    })

});


function mountGraph(typeGraph, nameGraph, graphObject, scope) {
    scope[nameGraph] = {};
    scope[nameGraph]['typeGraph'] = typeGraph;
    scope[nameGraph]['labels'] = graphObject.labels;
    scope[nameGraph]['data'] = graphObject.data;
    scope[nameGraph]['series'] = graphObject.series;
    scope[nameGraph]['ready'] = true;
}