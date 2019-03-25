var liters = function(number1) {
	return number1 * 3.78541
};

var number1 = parseInt(prompt("How many gallons do you have?"));

var result = liters(number1);

alert("total liters " + result);
