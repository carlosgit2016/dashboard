var AppService = angular.module('services',[]);

AppService.service('ClientesService',function ($http, API) {
    return {
        list: function(){
            return $http.get(API + 'clientes')
        },
        create: function(cliente){
            return $http.post(API + 'clientes', cliente)
        },
        update: function(cliente){
            return $http.put(API + 'clientes',cliente)
        },
        delete: function(cliente){
            return $http.delete(API + 'clientes',cliente)
        }
    }
});

App.service('TipoVeiculoService', function($http, API){
    return {
        list: function(){
            return $http.get(API + 'tipo-veiculos')
        },
        create: function(tipoDeVeiculo){
            return $http.post(API + 'tipo-veiculos', tipoDeVeiculo)
        },
        update: function(tipoDeVeiculo){
            return $http.put(API + 'tipo-veiculos',tipoDeVeiculo)
        },
        delete: function(tipoDeVeiculo){
            return $http.delete(API + 'tipo-veiculos',tipoDeVeiculo)
        }
    }
})