//console.log('Вы в '+window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

if (answer<18) {
	Image.style.backgroundImage = "url(img/tokio_gul.png)";
}else if (answer<=25) {
	Image.style.backgroundImage = "url(img/ball.png)";
}else if (answer<=50) {
	Image.style.backgroundImage = "url(img/tokio_gul.png)";
}else {
	Image.style.backgroundImage = "url(img/tokio_gul.png)";
}