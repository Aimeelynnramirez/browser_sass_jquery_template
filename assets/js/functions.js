
window.onload = function () {
$( document ).ready(function() {
	//this is checking if the buttons are clicking in call.
    $('.button').on('click', function(){
  console.log(' these buttons are clicking');
  
    })
  
  });
	const merge = $('.fruitButton').on('click', function(){
     //this is name of the array initally "basketOne.length"
	const basketOne = ['pineapples','pears','tomatoes'];
	//console.log('this is first array of types:', basketOne);
	for (i=0; i < basketOne.length; i++) {
		basketOne[''] = i;
		console.log('this is the first basket of fruit #:', i);
	}
	//this is renaming the array
	const basketTwo = ['apples','peaches','bananas'];
	//console.log('this is second array of types:', basketTwo);
	for (j=0; j < basketTwo.length; j++) {
		 basketTwo[''] = j;
		console.log('this is the second basket of fruit #:',  j);
	}
/* 	this was the first step to getting the names merged but ',' needed to be cleaner.
    const list = basketOne +','+ basketTwo; 
	console.log(this, list); */
	let list = i + j;    
	console.log('this is list', list);
	for (k=0; k < list.length; k++) {  
		let k = '';
		console.log('this is length', k, merge);
	}
	})
};

const mergeFizzBuzz = $('.fizzBuzzButton').on('click', function(){
	//this is an example of a length of 3 times to loop with 1 and 2 being the string values"
	let fizz = ['1'];
	let buzz = ['2'];
	let f = fizz  || buzz;
	for (f = 1 ||  2; f <= 3; f++) {
   	(fizz === 1) 
   console.log('this is fizz:', fizz[0]);
   	(buzz === 2) 
	console.log('this is buzz:', buzz[0]);
	let fizzBuzz = fizz[0] + ','+ buzz[0];
	console.log('this is fizzbuzz in a list:', fizzBuzz);
	console.log('this is adding values of fizzbuzz:', fizzBuzz.length);	
}
//return mergeFizzBuzz; this was placed before handling the values of arrays to be called.
})

