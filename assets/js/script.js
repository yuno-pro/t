const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

const Images = document.querySelectorAll(".pro img");
for(let img of Images){
    img.addEventListener("click",()=>{
        window.location.href='sproduct.html';
    })    
}