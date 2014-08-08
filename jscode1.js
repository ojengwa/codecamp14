for(var num = 1; num <= 100; num++){
	var fiver = (num % 5) === 0;
	var three = (num % 3) === 0;
	if(fiver && three){
		console.log("fizzbuzz");
	}
	else if(fiver){
		console.log("buzz");
	}
	else if(three){
		console.log("fizz");
	}
	else{
		console.log(num);
	}
}