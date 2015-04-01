//Exercice1
function MultiplicatorUnitFailure(message) {
	this.message = message;
    this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "InputError";

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.

    try{
    	console.log(primitiveMultiply(a,b));
    }catch(e){
      if(e instanceof MultiplicatorUnitFailure){
      	console.log("Failure in primitiveMultiply");
        reliableMultiply(a,b);
      }
     }
  
}

console.log(reliableMultiply(8, 8));
// → 64