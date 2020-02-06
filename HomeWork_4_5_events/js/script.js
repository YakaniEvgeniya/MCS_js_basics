const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');

let state = 'none';
button.addEventListener('click', function(){
popup.style.display = 'flex';
})
closePopup.addEventListener('click', function(){
popup.style.display = 'none';
})

const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', function(){
menu.style.left = '0';
})
closeMenu.addEventListener('click', function(){
menu.style.left = '-50vw';
})