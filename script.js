let btn = document.querySelector('button');
let screensize = document.querySelector('#screensize');
let windowsize = document.querySelector('#windowsize');
let contentsize = document.querySelector('#contentsize');

btn.addEventListener('click',() =>{
    screensize.innerText = `Screen Height: ${screen.height} - Screen Width: ${screen.width}`;
    windowsize.innerText = `window Height: ${window.outerHeight} - window Width: ${window.outerWidth}`;
    contentsize.innerText = `content Height: ${window.innerHeight} - content Width: ${window.innerWidth}`;

});
