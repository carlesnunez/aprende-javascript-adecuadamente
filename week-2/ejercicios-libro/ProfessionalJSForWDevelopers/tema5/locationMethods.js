
/*El metodo indexOf permite buscar en un array la posicion de algo en concreto. Si le pasamos unicamente un argumento buscara en todo el array, si le pasamos 
dos argumentos el segundo será la posicion de inicio de la busqueda en el array.
*/

/*
	El método lastIndexOf realiza lo mismo que el método index of pero empezando por el final del array. La posicion que devuelve es en el orden normal 0->1->2...
*/
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4)); //3
console.log(numbers.lastIndexOf(4)); //5
console.log(numbers.indexOf(4, 4)); //5
console.log(numbers.lastIndexOf(4, 4)); //3
var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];
console.log(people.indexOf(person)); //-1 no encontrado
console.log(morePeople.indexOf(person)); //0