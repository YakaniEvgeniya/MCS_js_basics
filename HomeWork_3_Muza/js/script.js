const Page = document.querySelector('body');
let Color = prompt('Какой ты хочешь цвет?');
Page.style ['background-color'] = Color;

const ColorText = document.querySelector('.page');
let ColorText1 = prompt('Какой будет цвет текста на странице?');
ColorText.style.color = ColorText1;

const Favorite = document.querySelector('.name');
let FavoriteMan = prompt('Как зовут человека который вас вдохновляет?');
Favorite.innerHTML = FavoriteMan;

const Image = document.querySelector('img');
let Image1 = prompt('Введите адрес картинки');
Image.setAttribute('src', Image1)

const TextPage = document.querySelector('.shortBio');
const TextPage2 = prompt('Введите текст на странице');
TextPage.innerHTML = ('shortBio', TextPage2);

const Ani = document.querySelector('.shortBio');
Ani.className += ' animated';
