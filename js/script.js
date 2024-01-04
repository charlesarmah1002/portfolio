// script for menu
const menuBtn = document.querySelector('#menuToggle')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

function menuShut() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}