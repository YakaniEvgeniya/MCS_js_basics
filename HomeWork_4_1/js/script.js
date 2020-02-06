let num = prompt('Напиши любое число');
num = parseInt(num);

if (num==0) {
	console.log(num);
}else if (num>0) {
	num=num-num*2
	console.log(num);
}else {
	num= -num;
	console.log(num);
}