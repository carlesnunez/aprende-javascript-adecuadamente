// 02
entender = true;

while(entender){
	console.log("¡Estoy aprendiendo sobre los bucles 'while'!");
	entender = false;
}

//03
entender = true;

while(entender){
	console.log("¡Estoy aprendiendo sobre los bucles 'while'!");
	//¡Cambia aquí el valor de 'entender'!
	entender = false;
	
}

//04
var bool = true;

while(bool){
    console.log("¡Menos es más!");
    bool = false;
}

//05
//¡Recuerda hacer que tu condición sea igual a 'true' fuera del bucle!

var bucle = function(){
	var i = 0;
	var message;
	while(i < 3){
		//¡Tu código va aquí!
	    console.log("¡Estoy en un bucle!");
		++i;
	}
};

bucle();

//06
//¡Recuerda hacer que tu condición sea igual a 'true' fuera del bucle!
var condition = true;
var soloBucle = function(condition){
  //¡Tu código va aquí!
  while(condition){
      console.log("¡Un bucle!");
      condition = false;
  }
};

soloBucle(condition);

//07
//Repaso

//08
var i = 0;
while(i < 10){
    console.log("While", i);
    ++i;
}

for(i = 0; i < 10; i++){
    console.log("For", i) ;   
}

//09
condicionBucle = false;

do {
	console.log("Voy a dejar de hacer bucles porque mi condición es " + String(condicionBucle) + "!");	
} while (condicionBucle === true);

//10
var alHelicoptero = function(){
  //¡Escribe aquí tu bucle do/while!
  var dentro = false;
  do{
  console.log("Vamos!");
  dentro = true;
  }while(!dentro);
};

//11
for(var i = 0; i < 10; i++){
    
}
i= 0;
while(i < 10){
    ++i;
}
i=0;
do{
	++i;
}while(i <10);