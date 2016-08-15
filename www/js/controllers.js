angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, $ionicPopup, $timeout) {
   // Alerta de dialogo
   $scope.showAlertDev = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Creadores:',
       template: ' <strong>Nutricionista:</strong>Lcda. Cynthia Chávez Castillo<br/> <strong>Correo:</strong>cynthiacasz@gmail.com <br/><br/> <strong>Desarrollador:</strong>Ing. Juan Carlos Estévez <br/> <strong>Correo:</strong> juank20097@gmail.com  '
     });
   };

    // Alerta de dialogo
   $scope.showAlertImc = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Indice de Masa Corporal',
       template: 'Es una medida de asociación entre el peso y la talla  de un individuo para determinar su estado nutricional.'
     });
   };
})

.controller('DatosCtrl', function($scope, $state, $ionicPopup) {
  
  $scope.sendForm = function(){
    if (this.genero =='undefined' || this.genero == null || this.talla=='undefined' || this.talla == null || this.peso=='undefined' || this.peso == null || this.edad=='undefined' || this.edad == null) {
            showAlert();
      }else{
          if (this.talla % 1 === 0 && this.peso % 1 === 0){
            $state.go('app.imc' ,{ genero: this.genero ,edad: this.edad,talla: this.talla,peso: this.peso})
          }else{
              showAlert2();
          }
           
      }
  }

    showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Importante',
       template: 'Alguno de los datos no estan definidos'
     });
   };

    showAlert2 = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Recordatorio',
       template: 'Recuerda no poner comas "," o puntos "." en los datos ingresados.'
     });
   };
 
})

.controller('ImcCtrl', function($scope, $state) {

//obtencion de datos
  var genero = $state.params.genero;
  var edad = $state.params.edad;
  var talla = $state.params.talla;
  var peso = $state.params.peso;

  $scope.genero = genero;
  $scope.edad = edad;
  $scope.talla = talla;
  $scope.peso = peso;

//calculo de peso


  var talla_m = (talla / 100)*(talla / 100)
  
  var imc =  (peso / talla_m);
  var imc_redondeado = Math.round(imc * 100)  / 100

  $scope.imc = imc_redondeado;

//mostrar datos he imagen segun el calculo
  if (imc_redondeado < 18.4){
  $scope.dato = 'Insuficiente';
  $scope.img ='poco';
  }else if (imc_redondeado < 24.9){
    $scope.dato = 'Normal';
  $scope.img ='normal';
  }else if (imc_redondeado < 29.9){
    $scope.dato = 'Sobrepeso';
  $scope.img ='sobrepeso';
  }else if (imc_redondeado < 34.9){
    $scope.dato = 'Obesidad-I';
  $scope.img ='obesidad1';
  }else if (imc_redondeado < 39.9){
    $scope.dato = 'Obesidad-II';
  $scope.img ='obesidad2';
  }else if (imc_redondeado > 40){
    $scope.dato = 'Obesidad-III';
  $scope.img ='obesidad3';
  }

})

.controller('EjercicioCtrl', function($scope, $state) {

  var genero = $state.params.genero;
  var edad = $state.params.edad;
  var talla = $state.params.talla;
  var peso = $state.params.peso;
  var tipo = $state.params.tipo;

  $scope.genero = genero;
  $scope.edad = edad;
  $scope.talla = talla;
  $scope.peso = peso;

  console.log(tipo);

  if (tipo === 'Insuficiente'){
    $scope.ejercicio = 'Ninguno';
    $scope.tiempo = 'Ninguno';
  } else if (tipo === 'Normal'){
    $scope.ejercicio = 'Tonificación (uso de pesas o aeróbicos)';
    $scope.tiempo = '30 minutos diariamente';
  } else if (tipo === 'Sobrepeso'){
    $scope.ejercicio = ' Cardio 2-3 veces por semana (trotar, natación, bailoterapia, crossfit, etc.), y ejercicios de tonificación';
    $scope.tiempo = '45 minutos o más diariamente';
  }else if (tipo === 'Obesidad-I' || tipo === 'Obesidad-II' || tipo === 'Obesidad-III'){
    $scope.ejercicio = 'Cardio todos los días(trotar, natación, bailoterapia, crossfit, etc.)';
    $scope.tiempo = '1 hora o más diariamente';
  }


  
})

.controller('AlimentacionCtrl', function($scope, $state) {

  var genero = $state.params.genero;
  var edad = $state.params.edad;
  var talla = $state.params.talla;
  var peso = $state.params.peso;
  var tipo = $state.params.tipo;

  $scope.genero = genero;
  $scope.edad = edad;
  $scope.talla = talla;
  $scope.peso = peso;
  
  console.log(tipo);

  if (tipo === 'Insuficiente'){
    $scope.alimentacion = 'Todos los grupos de alimentos son permitidos';
    $scope.tiempo = '6-8 tiempos de comida';
  } else if (tipo === 'Normal'){
    $scope.alimentacion = 'Todos los grupos de alimentos son permitidos.';
    $scope.tiempo = '5 tiempos de comida';
  } else if (tipo === 'Sobrepeso'){
    $scope.alimentacion = ' Lácteos y derivados: leche descremada, yogur sin azúcar, queso tierno; frutas: manzana verde, pera, claudia, naranja, melón, papaya, kiwi, tomate de árbol, naranjilla; verduras: col, coliflor, lechuga, zanahoria, tomate, acelga, espinca, etc; cereales y derivados: pan integral, arroz (poca cantidad), galletas simples; granos: granos tiernos; tubérculos: papa zanahoria amarila, yuca (en pocas cantidades); bebidas: jugos naturales, té, agua; condimentos: naturales; pescado y mariscos: de cualquier variedad menos fritos; embutidos: jamón de pavo, de pollo; carnes: pollo sin piel, res o cerdo.';
    $scope.tiempo = '5 tiempos de comida equilibradas teniendo preferencia por los de origen proteico: carnes, lácteos y derivaos, pescado; reduciendo los carbohidratos: papas, fideo y arroz. Evitar fritos.';
  }else if (tipo === 'Obesidad-I' || tipo === 'Obesidad-II' || tipo === 'Obesidad-III'){
    $scope.alimentacion = 'Lácteos y derivados: leche descremada, yogur sin azúcar, queso tierno; frutas: manzana verde, pera, claudia, naranja, melón, papaya, kiwi, tomate de árbol, naranjilla; verduras: col, coliflor, lechuga, zanahoria, tomate, acelga, espinca, etc(debe ocupar mas de la mitad del plato); cereales y derivados: pan integral, arroz (poca cantidad), ; granos: granos tiernos; tubérculos: papa zanahoria amarila, yuca (en pocas cantidades); bebidas: jugos naturales, té, agua; condimentos: naturales; pescado y mariscos: de cualquier variedad menos fritos; embutidos: jamón de pavo, de pollo; carnes: pollo sin piel, res o cerdo.';
    $scope.tiempo = '5 A 6 tiempos de comida al día en cantidades equilibradas teniendo preferencia por los de origen proteico: carnes, lácteos y derivaos, pescado. ; reduciendo los carbohidratos: papas, fideo y arroz. No fritos ni gaseosas.';
  }
})


