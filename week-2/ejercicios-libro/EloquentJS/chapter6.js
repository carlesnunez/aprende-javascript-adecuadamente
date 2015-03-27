// Your code here.
// Your code here.
function Vector(x, y){
  this.x = x;
    this.y = y;
}
  Vector.prototype.plus = function(vector){
    if(vector instanceof Vector){
      return new Vector(this.x+vector.x, this.y+vector.y);
    }
  }
  
   Vector.prototype.minus = function(vector){
    if(vector instanceof Vector){
      return new Vector(this.x-vector.x, this.y-vector.y);
    }
  }

Vector.prototype.__defineGetter__("length", function () {
    return Math.sqrt( Math.pow( this.x, 2 ) + Math.pow( this.y, 2 ) );
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3,4).length);
//5