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

function play() {
    let video = document.querySelector('video.video');
    let cover = document.querySelector('.cover');
    
    if(video.paused){
        video.play();
        cover.style.opacity = '0';
        cover.style.pointerEvents = 'none';
    }else {
        video.pause();
        cover.style.opacity = '1';
        cover.style.pointerEvents = 'none';
    }
}