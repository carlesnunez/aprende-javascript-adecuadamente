//1
var saldo = 20.97;

if (saldo < 5) {
   console.log(saldo - 5);    
}
else {
    console.log(saldo);
}

//2

//Así es como luce una función

var dividirPorTres = function (number) {
    var val = number / 3;
    console.log(val);
};

//En la línea 11, llamamos a la función por su nombre
//Ahora la llamamos desde 'dividirportres'
//Le decimos al computador cuál es el número de entrada (es decir, 6)
//Entonces el computador usa el código dentro de la función
dividirPorTres(6);

//3
//A continuación está la función de saludo
//Observa la línea 7
//Podemos unir strings usando el signo de más +
//Para saber más, consulta la sugerencia

var saludo = function (nombre) {
    console.log("Qué bueno verte," + " " + nombre);
};

//¡En la línea 11, llama a la función de saludo!
saludo("Carles");

//4 
//Escribe tu función de demandaDeAlimentos a continuación.
//Última sugerencia: Termina cada línea de tu bloque reusable de código
//con ;
var demandaDeAlimentos = function(comida){
    console.log("Quiero comer " + comida);
};

demandaDeAlimentos("Chocolate");

//5
//Función bien escrita
var calcular = function (numero) {
    var val = numero * 10;
    console.log(val);
};

//Función mal escrita con errores de sintaxis

var saludo = function(nombre){
    console.log(nombre);
};
saludo("Carles");

//6
var costoNaranjas = function(precioUnitario){
   var pecioSuma = precioUnitario * 5; 
   console.log(precioSuma);
};

costoNaranjas(5);

//7
//El parámetro es un número, y hacemos operaciones matemáticas con ese parámetro
var porDos = function(numero) {
    return numero * 2;
};

// llama aquí porDos
var nuevoNumero = porDos(2);
console.log(nuevoNumero);

//8
// Define cuarto aquí.
var cuarto = function(numero){
    return numero / 4;
}




if (cuarto(12) % 3 === 0 ) {
  console.log("La sentencia es true");
} else {
  console.log("La sentencia es false");
}

//9
// Escribe tu función comenzando en la línea 3

var perimetroCaja = function(largo, ancho){
    return (largo*2) + (ancho*2);
}

perimetroCaja(5,3);

//10
// Declara multiplicado fuera de la función en la línea 3.
// Esto quiere decir que tiene ámbito global 
var multiplicado;

var porDos = function(number) {
    
    multiplicado = number * 2;
    
};

porDos(4);

// ¡No se puede acceder a la variable multiplicado! 
// ¡Haz algo para que la línea 15 funcione!
console.log(multiplicado);


//11
var stringNombre =  function(nombre) {
    return "Hola, soy " + nombre;
}

//12
//Escribe tu función a continuación. 
//¡No olvides llamar a tu función!
var verificarCredito = function(ingresos){
    if(ingresos >= 100){
        console.log("¡Ganas mucho dinero!");
    }else{
        console.log("Desgraciadamente no estás calificado para manejar una tarjeta          de crédito. El capitalismo es así de cruel");
    }
}

verificarCredito(75);

verificarCredito(125);







