function isPrime(number){
	if(number <= 1){
		return false;
	}else{
		for(var i = number-1; i > 1 ; i--){
			
			if(number % i === 0){
				return false;
			}
		}

		return true;
	}
}

function getAllPrimeNumbers(number){

	for(var i = number, array = []; i >= 2 ; i--){
		if(isPrime(i)){
			array.push(i);
		}
	}
	;
	return array;
}

//console.log(getAllPrimeNumbers(13195));

function maxPrimeFactor(number){
	if(isPrime(number)){
		return number;
	}else{
		for(i = Math.floor(number/2); i >=2 ; i= i-2){
			if((number % i == 0) && isPrime(i)){
				return i;
			}
		}
	}
}

console.log(maxPrimeFactor(600851475143)); //6857