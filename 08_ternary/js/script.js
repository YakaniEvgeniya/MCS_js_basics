//console.log('Вы в '+window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

(answer >= 18) ? Image.style.backgroundImage = 'url(img/ball.png)' : Image.style.backgroundImage = 'url(img/tokio_gul.png)'