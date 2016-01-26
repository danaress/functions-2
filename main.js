// 1 - Need Help

// var getName = function() {
// 	var obj = {}
// 	console.log(obj.name);
// }

// getName({ name: "Luisa", age: 25 });

// 2 - Done

// var totalLetters = function(myArray) {
// 	var total = 0
// 	for (var i=0; i < myArray.length; i++){
// 		total += (myArray[i].length);
	
// 	}
// 	return(total);
// }


// totalLetters(['what', 'happened', 'to', 'my', 'function']);

// 3 - Need Help

// var keyValue = function(a, b){
// 	return ({[a]: b});
	
// }
// console.log(keyValue('city', 'Denver'));


// var keyValue = function(z, b){

// 	var obj2 = {};
// 	var city = keyValue[z];
// 	var loc = keyValue[b];
// 	obj2 = {city: loc};
// 	console.log(obj2);
// }
// keyValue('city', 'Denver');

// 4 - Done

// var negativeIndex = function(arrayp, x){
// 	for (var i=0; i < arrayp.length; i++) {
// 		b = arrayp.length + x;
// 		return(arrayp[b]);
// 	}
// }

// negativeIndex(['a', 'b', 'c', 'd', 'e'], -3)


// 5 - Done

// var removeM = function(str) {
// 	x = str.replace(/m/g, '');
// 	console.log(x);
// }
// removeM('memory');

//  6 - Done

// var printObject = function(b){

// 	for (var key in b) {
// 		console.log(key + " is " + b[key]);
// 	}
	
// }
// printObject({ a: 10, b: 20, c: 30 });


// 7

// vowelarray = ['a', 'e', 'i', 'o', 'u']

// vowels = function(str){

// 	var xarray = str.split("");

// 	var newarray = xarray.filter(function(element) {
// 		for (var i=0; i< vowelarray.length; i++) {
// 			if (element === vowelarray[i]){
// 				return true;
// 			}
// 		}
// 		return false;
// 	})
// 	console.log(newarray);
// }

// vowels('What evil odd ducks!');

//  8

or = function(a) {
	for (var i=0; i < a.length; i++) {
		if (a[i] === true) {
			return true;
		}
	}
	return false;
}
or([false, false, true, false]);


