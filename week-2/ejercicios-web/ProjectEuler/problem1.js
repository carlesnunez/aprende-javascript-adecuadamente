var sum = function sum(previousValue, currentValue, index, array){
		return previousValue + currentValue;
};

//Find multiples look for the sum of multiples from 0 to a prefixed number(number not included).
var findMultiples = function findMultiples(to){
	for(var i = 1, multiples = []; i < to; i ++){
		if(i%3 === 0 || i%5 === 0){
			multiples.push(i);
		}
	}
	var sumMultiples = 0;
	sum = multiples.reduce(sum);
	return sum;
};

console.log(findMultiples(1000));