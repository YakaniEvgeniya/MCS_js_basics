console.log('Вы в '+window.location);

const num = prompt('Введите любое число)');

function moduleExp(num) {
	return Math.abs(num);
}
const numExp = Math.floor(Math.random()*(10-1)+1);

console.log(Math.pow(num, numExp));
alert('Ваше число '+num+' в степени '+numExp+' = '+Math.pow(num, numExp));