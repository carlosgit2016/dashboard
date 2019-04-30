var App = angular.module('App', ['ngRoute', 'chart.js']);

App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/inicial.html',
        }).when('/sobre', {
            templateUrl: 'views/sobre.html'
        }).when('/cadastro/cliente', {
            templateUrl: 'views/cliente/cliente.html'
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
        })
});

App.controller("GraphCtrl", function ($scope) {

    $scope.labels = ["Ouro", "Prata", "Talco", "Gipsita", "Fluorita", "Apatita", "Apatita", "Quartzo", "Quartzo"];
    $scope.series = ['Janeiro','Fevereiro','Março'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [50, 40, 30, 90, 15, 75, 98],
        [17, 45, 23, 11, 30, 20, 58]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

/**
 * Add animated in html element on mouse over
 * @param {*} event 
 */
function onOver(event) {
    var nameAnimate = "heartBeat";
    this.animateCSS(event.target, nameAnimate);
}

function animateCSS(element, animationName, callback) {
    this.addClassAnimatedAndAnotherClass(element,animationName);
    if (typeof callback === 'function') callback()
    function handleAnimationEnd() {
        var className = 'animated';
        element.classList.remove(className, animationName)
        this.removeElementHandler(element, handleAnimationEnd);
    }
    this.addHandlerToElementAnimationEnd(element, handleAnimationEnd);
}


//Adcionando função handler no evento ao final da animação
function addHandlerToElementAnimationEnd(element,handleAnimationEnd){ 
    var nameEvent = "animationend";
    element.addEventListener(nameEvent, handleAnimationEnd)
}
//Adcionando função handler no evento ao começo da animação
function addHandlerToElementAnimationStart(element,handleAnimationStart){
    var nameEvent = "animationstart";
    element.addEventListener(nameEvent, handleAnimationStart)
}

function removeElementHandler(element, handler) {
    var nameAnimation = "animationend";
    element.removeEventListener(nameAnimation, handler)
}

function addClassAnimatedAndAnotherClass(element, anotherClass) {
    this.addClassAnimatedInElement(element);
    this.addClassInElement(element, anotherClass);
}

function addClassAnimatedInElement(element) {
    this.addClassInElement(element, 'animated');
}

function addClassInElement(element, clazz) {
    element.classList.add(clazz);
}
