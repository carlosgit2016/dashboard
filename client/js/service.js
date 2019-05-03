var AppService = angular.module('services', []);

AppService.service('ClientesService', function ($http, API) {
    return {
        list: function () {
            return $http.get(API + 'clientes')
        },
        create: function (cliente) {
            return $http.post(API + 'clientes', cliente)
        },
        update: function (cliente) {
            return $http.put(API + 'clientes', cliente)
        },
        delete: function (cliente) {
            return $http.delete(API + 'clientes', cliente)
        }
    }
});

App.service('TipoVeiculoService', function ($http, API) {
    return {
        list: function () {
            return $http.get(API + 'tipo-veiculos')
        },
        create: function (tipoDeVeiculo) {
            return $http.post(API + 'tipo-veiculos', tipoDeVeiculo)
        },
        update: function (tipoDeVeiculo) {
            return $http.put(API + 'tipo-veiculos', tipoDeVeiculo)
        },
        delete: function (tipoDeVeiculo) {
            return $http.delete(API + 'tipo-veiculos', tipoDeVeiculo)
        }
    }
})

App.service('MinerioService', function ($http, API) {
    return {
        list: function () {
            return $http.get(API + 'minerios')
        },
        create: function (minerio) {
            return $http.post(API + 'minerios', minerio)
        },
        update: function (minerio) {
            return $http.put(API + 'minerios', minerio)
        },
        delete: function (minerio) {
            return $http.delete(API + 'minerios', minerio)
        }
    }
})

App.service('VeiculoService', function ($http, API) {
    return {
        list: function () {
            return $http.get(API + 'veiculos')
        },
        create: function (veiculo) {
            return $http.post(API + 'veiculos', veiculo)
        },
        update: function (veiculo) {
            return $http.put(API + 'veiculos', veiculo)
        },
        delete: function (veiculo) {
            return $http.delete(API + 'veiculos', veiculo)
        }
    }
})

App.service('PedidoService', function ($http, API) {
    return {
        list: function () {
            return $http.get(API + 'pedidos')
        },
        create: function (pedido) {
            return $http.post(API + 'pedidos', pedido)
        },
        update: function (pedido) {
            return $http.put(API + 'pedidos', pedido)
        },
        delete: function (pedido) {
            return $http.delete(API + 'pedidos', pedido)
        }
    }
})