var AppComponent = angular.module('components', ['ngRoute']);


function serialize(entity, iEntity) { // Serializar valores do form
    Object.keys(iEntity).forEach(function (key) {
        entity[key] = iEntity[key];
    });
}

function resolvePromise(promise, callback) {
    promise.then(function (response) {
        alert('Cadastrado com sucesso: ' + JSON.stringify(response.data.nome ? response.data.nome : response.data))
        callback();
    }).catch(function (error) {
        if(!error.data[0]) alert("Problema ao Cadastrar, verifique os campos");
        else alert(JSON.stringify(error.data[0].msg_user));
        throw error;
    })
}

function DefaultController(PassDataBeteewenPages, $location, DefaultService) {
    var $ctrl = this;
    $ctrl.$onInit = function () {
        var editData = PassDataBeteewenPages.get();
        if (editData) { // Valores atribuidos ao serviço, singleton
            $ctrl.entity = editData;
        }
    }

    $ctrl.salvar = function (_entity) {
        if (isValideObjectAndIsEditOption($ctrl.entity)) { //Editando
            serialize($ctrl.entity, _entity);
            var promise = DefaultService.update($ctrl.entity, $ctrl.path, $ctrl.idEntity);
            resolvePromise(promise, back);
        } else { // Nova entidade
            $ctrl.entity = _entity;
            var promise = DefaultService.create($ctrl.entity, $ctrl.path);
            resolvePromise(promise, back);
        }

    }

    $ctrl.cancelar = function () {
        back();
    }

    $ctrl.hasAndIsValideEntity = function () {
        return isValideObjectAndIsEditOption($ctrl.entity);
    }

    var back = function () {
        $location.path($ctrl.backpath);
    }
}

function isEditOption(entity) {
    const subStr = Object.keys(entity)[0].slice(0, 2);
    return subStr === 'id';
}

function valideObject(obj) {
    return obj !== undefined && obj !== null && Object.keys(obj).length > 0;
}

function isValideObjectAndIsEditOption(obj) {
    return valideObject(obj) && isEditOption(obj);
}

App.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

App.component('dropdown', {
    templateUrl: '../views/dropdown/dropdown.html',
    bindings: {
        path: '@',
        onSelect: '&'
    },
    controller: function (DefaultService) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.items = [];
            DefaultService.list($ctrl.path).then(function (data) {
                $ctrl.items = data.data;
            });

        }

        $ctrl.hasChanged = function (change) {
            console.log(change);
            $ctrl.onSelect({ change });
        }

    }
})

//Controle de Cliente
App.component('controlarCliente', {
    templateUrl: '../views/cliente/cadastrar.html',
    bindings: {
        backpath: '<',
        path: '@',
        idEntity: '@'
    },
    controller: DefaultController
});


//Controle de Minerio
App.component('controlarMinerio', {
    templateUrl: '../views/minerio/cadastrar.html',
    bindings: {
        backpath: '<',
        path: '@',
        idEntity: '@'
    },
    controller: DefaultController
});

//Controle de Pedido
App.component('controlarPedido', {
    templateUrl: '../views/pedido/cadastrar.html',
    bindings: {
        backpath: '<',
        path: '@',
        idEntity: '@'
    },
    controller: DefaultController
});

//Controle de Tipo de Veiculo
App.component('controlarTipoDeVeiculo', {
    templateUrl: '../views/tipo-veiculo/cadastrar.html',
    bindings: {
        backpath: '<',
        path: '@',
        idEntity: '@'
    },
    controller: DefaultController
});

//Controle Veiculo
App.component('controlarVeiculo', {
    templateUrl: '../views/veiculo/cadastrar.html',
    bindings: {
        backpath: '<',
        path: '@',
        idEntity: '@'
    },
    controller: DefaultController
});

AppComponent.config(function ($routeProvider) {
    $routeProvider.when('/cliente/controlar', {
        template: '<controlar-cliente id-entity="id_cliente" path="clientes" backpath="\'/cadastro/cliente\'" class="flex justify-center m-16" ></controlar-cliente>'
    }).when('/minerio/controlar', {
        template: '<controlar-minerio id-entity="id_minerio" path="minerios" backpath="\'/cadastro/minerio\'" class="flex justify-center m-16" ></controlar-minerio>'
    }).when('/pedido/controlar', {
        template: '<controlar-pedido id-entity="id_pedido" path="pedidos" backpath="\'/cadastro/pedido\'" class="flex justify-center m-16" ></controlar-pedido>'
    }).when('/tipo-veiculos/controlar', {
        template: '<controlar-tipo-de-veiculo id-entity="id_tipo_veiculo" path="tipo-veiculos" backpath="\'/cadastro/tipo-veiculo\'" class="flex justify-center m-16" ></controlar-tipo-de-veiculo>'
    }).when('/veiculo/controlar', {
        template: '<controlar-veiculo id-entity="id_veiculo" path="veiculos" backpath="\'/cadastro/veiculo\'" class="flex justify-center m-16" ></controlar-veiculo>'
    });
});