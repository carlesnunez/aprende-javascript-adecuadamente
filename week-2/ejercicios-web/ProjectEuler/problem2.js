var sum = function sum(previousValue, currentValue, index, array){
		return previousValue + currentValue;
};
//Fibonacci no recursivo.
var fibonacci = [1,1];
var i = 1;
while((fibonacci[i-1] + fibonacci[i]) <= 4000000){
	fibonacci.push(fibonacci[i-1] + fibonacci[i])
	++i;
}

var filtered = fibonacci.filter(function(element){return element%2 == 0});
var sumFibbo = filtered.reduce(sum);

console.log(filtered, "Total sumatory:", sumFibbo);

console.log("***************************************************************");
//Con la funcion recursiva de fibonacci nosotros le podemos indicar como queremos que empieze(pasandole los dos items antecesores)
//Y como queremos que acabe(pasandole el numero que nunca debe sobrepasarse)
function fibonacciRecursivo(fiboArray, max){
	if(fiboArray[fiboArray.length-2] + fiboArray[fiboArray.length -1] >= max){
		return fiboArray;
	}else{
		fiboArray.push(fiboArray[fiboArray.length-2] + fiboArray[fiboArray.length -1]);
		return fibonacciRecursivo(fiboArray, max);
	}
	
}

var fiboRec = fibonacciRecursivo([1,1], 4000000);
var sumFiboRecursive = fiboRec.reduce(sum);

console.log(fiboRec, "Total sumatory:", sumFiboRecursive);