// creating mouse effects
const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    circle.style.left = `${e.pageX - width / 2}px`;
    circle.style.top = `${e.pageY - width / 2}px`;
})

// script for menu
const menuBtn = document.querySelector('.menu-toggle button')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

function menuShut() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}