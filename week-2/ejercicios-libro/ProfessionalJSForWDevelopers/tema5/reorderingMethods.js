//Reverse method
var values = [1,2,3,4,5,6];
values.reverse();
console.log(values);

//Funcion que usaremos posteriormente como metodo de ordenacion en el metodo SORT.
function compareV1(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}

//Si usamos sort sin pasarle nada llama al cast String() en cada item y compara los strings para determinar el orden correcto.
var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);

values.sort(compareV1);
console.log(values);

//Metodo más optimo de realizar una funcion para comparar
function compareV2(value1, value2){
	return value1- value2;
}

values = [0, 1, 5, 10, 15];

values.sort(compareV2);

console.log(values);