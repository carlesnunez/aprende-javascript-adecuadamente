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


