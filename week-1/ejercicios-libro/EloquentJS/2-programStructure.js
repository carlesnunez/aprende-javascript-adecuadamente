//making a triangle
function makeTriangle(){
	for(var i = 0, output = ""; i < 7; i++){
		output += "#"
		console.log(output);
	}
}

function printListOfNumbers(){
	for(var i = 1; i <= 100; i++){
	  if((i % 3 === 0) && (i % 5 === 0)){}else if((i % 3 === 0) && (i % 5 !== 0)){
	  	console.log("FizzBuzz");
	  }else if((i % 5 === 0) && (i % 3 !== 0)){
	    console.log("Buzz")
	  }else{
	  	console.log(i);
	  }
	}
}

function chessTableMethod1(size){
	// Your code here.
	var line = "";
	for(var i = 0; i < size;i++){
	  line = "";
	  for(var e = 0; e < (size/2);e++){
	    if(i % 2 === 0){
	  		line+= " #";
	    }else{
	      	line +="# ";
	    }
	  }
	  console.log(line);
	}
}

function chessTableMethod2(size){

	// Your code here.
	var line = "";
	for(var i = 0; i < size;i++){
	  line = "";
	  for(var e = 0; e < size ;e++){
	    if(i % 2 === 0 && e % 2 !== 0){
	  		line+= "#";
	    }else  if(i % 2 === 0 && e % 2 === 0){
	    	line+= " ";
	    }else if(i % 2 !== 0 && e % 2 !== 0){
	      	line +=" ";
	    }else{
	    	line += "#";
	    }
	  }
	  console.log(line);
	}
}
function creatingTheMinFunction(){
	// Your code here.
	var min = function(){
	  for(var i = 0, smaller = 0; i < arguments.length; i++){
	    if(arguments[i] < smaller){
	    	smaller = arguments[i];
	    }
	  }
	  
	  return smaller;
	};

	console.log(min(1,5,9,-10));
}

//Aplicando recursividad.
function isEven(number){
  if(number === 0){
  	console.log("Is even");
  }else if(number === 1 || number === -1){
  	console.log("Is odd");
  }else if(number > 0){
  	isEven(number-2);
  }else if(number < 0){
  	isEven(number+2);
  }
}

// Your code here.
var countBs = function(word){
  for(var i = 0, bs = 0; i < word.length; i++){
    if(word[i] === "B"){
    	++bs;
    }
  }
  return bs;
}

var countChar = function(word, letter){
  for(var i = 0, ltrs = 0; i < word.length; i++){
    if(word[i] === letter){
    	++ltrs;
    }
  }
  return ltrs;
}