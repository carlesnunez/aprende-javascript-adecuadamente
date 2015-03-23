var values = [1,2,3,4,5]
var reduceFunc = function(prev, curr, index, array){
	return prev + curr;
};
var sum = "Reduce: " + values.reduce(reduceFunc);

console.log(sum);

var sumRight = "Reduce right: " + values.reduceRight(reduceFunc);

console.log(sumRight);