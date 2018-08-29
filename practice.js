function change(number) {
    console.log('inside change');
   number -= 1;
   return number; 
}

function num(num2) {
     change(num2);
     console.log('after change');
	console.log(num2);
}

num(5);