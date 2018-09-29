
window.onload = function () {
$( document ).ready(function() {
    $('.button').on('click', function(){
  //console.log('this is clicking');
  
    })
  
  });


	
	
	const merge = $('.button').on('click', function(){
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
