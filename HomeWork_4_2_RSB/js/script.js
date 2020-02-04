console.log('Вы в '+window.location);

const rock = 0; //камень
const scissors = 1; //ножницы
const paper = 2; //бумага

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Выбирайте(напишите число): 0 - камень, 1 - ножницы, 2 - бумага'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player == rock && computer == scissors) {
	console.log('player win');
}else if (player == scissors && computer == paper) {
	console.log('player win');
}else if (player == paper && computer == rock) {
	console.log('player win');
}else if (player == scissors && computer == rock) {
	console.log('computer win');
}else if (player == paper && computer == scissors) {
	console.log('computer win');
}else if (player == rock && computer == paper) {
	console.log('computer win');
}else 
	console.log('Ничья!');

