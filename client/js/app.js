var App = angular.module('App', ['ngRoute', 'chart.js','controllers','services','components']);

App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/inicial.html',
        }).when('/sobre', {
            templateUrl: 'views/sobre.html'
        }).when('/cadastro/cliente', {
            templateUrl: 'views/cliente/cliente.html'
        }).when('/cadastro/cliente/cadastrar', {
            templateUrl: 'views/cliente/form.html'
        }).when('/cadastro/minerio', {
            templateUrl: 'views/minerio/minerio.html'
        }).when('/cadastro/pedido', {
            templateUrl: 'views/pedido/pedido.html'
        }).when('/cadastro/tipo-veiculo', {
            templateUrl: 'views/tipo-veiculo/tipo-veiculo.html'
        }).when('/cadastro/veiculo', {
            templateUrl: 'views/veiculo/veiculo.html'
        }).when('/cadastros', {
            templateUrl: 'views/cadastros/cadastros.html'
        }).when('/clientes',{
            templateUrl: 'views/cliente/cadastrar.html'
        })
});

App.value('API', 'http://localhost:8090/');