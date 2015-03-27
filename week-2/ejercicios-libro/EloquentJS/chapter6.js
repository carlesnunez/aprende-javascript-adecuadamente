var Rabbit = function Rabbit(name, teethSize){
	this.name = name;
	this.teethSize = teethSize;

	this.getName = function getName(){
		return this.name;
	};
}

var bugsBunny = new Rabbit("bugsBunny", "Big");

bugsBunny.getName();