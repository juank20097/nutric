// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  $ionicConfigProvider.navBar.alignTitle("center");
  
  $stateProvider

  //metodo para cargar el menu lateral y el mismo en todas las paginas
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

    //metodo de ingreso a una vista
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

    //metodo de ingreso a una vista
    .state('app.datos', {
      url: '/datos',
      views: {
        'menuContent': {
          templateUrl: 'templates/datos.html',
           controller: 'DatosCtrl'
        }
      }
    })

     //metodo de ingreso a una vista
    .state('app.imc', {
      url: '/imc/:genero/:edad/:talla/:peso',
      views: {
        'menuContent': {
          templateUrl: 'templates/imc.html',
          controller: 'ImcCtrl'
        }
      }
    })

      //metodo de ingreso a una vista
    .state('app.ejercicio', {
      url: '/ejercicio/:genero/:edad/:talla/:peso/:tipo',
      views: {
        'menuContent': {
          templateUrl: 'templates/ejercicio.html',
          controller: 'EjercicioCtrl'
        }
      }
    })

      //metodo de ingreso a una vista
    .state('app.alimentacion', {
      url: '/alimentacion/:genero/:edad/:talla/:peso/:tipo',
      views: {
        'menuContent': {
          templateUrl: 'templates/alimentacion.html',
          controller: 'AlimentacionCtrl'
        }
      }
    })

  // SI no encuentra ninguna vista lanza la siguiente
  $urlRouterProvider.otherwise('/app/home');
});
