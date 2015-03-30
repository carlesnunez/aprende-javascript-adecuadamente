var Rabbit = function Rabbit(name, teethSize){
	this.name = name;
	this.teethSize = teethSize;

	this.getName = function getName(){
		return this.name;
	};
}

var bugsBunny = new Rabbit("bugsBunny", "Big");
Rabbit.prototype.test = function(){return "LOL" + this.name};

console.log(bugsBunny.getName());
Rabbit.prototype.getName = function(){return "Moco"};
console.log(bugsBunny.test());

console.log(bugsBunny.getName());

