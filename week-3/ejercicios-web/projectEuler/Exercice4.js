function findPalindrome(digits){
	var start = '1';
	var end = '9';
	for(var i = 0; i < digits-1; i++){
		start += '0';
		end += '9';

	}

	start = parseInt(start);
	end = parseInt(end);
	var curPal;

	for(i = start; i <= end; i++){
		
		for(var z = start; z <= end; z++){
			var pal = i*z;
			if(isPalindrome(pal))
				curPal = pal;
		}
	}

	return curPal
}
function reverse(string) {
  var o = '';
  for (var i = string.length - 1; i >= 0; i--)
    o += string[i];
  return o;
}

function isPalindrome(number){
	var isPalindrome;
	number = new String(number);
	(number == reverse(number)) ? (isPalindrome = true) : (isPalindrome = false);

	return isPalindrome;
}


console.log(findPalindrome(3));