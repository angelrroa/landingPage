AOS.init({
    offset:1
});

let nav = document.querySelector('nav');
document.querySelector('.boton').addEventListener('click',function(){
    nav.classList.toggle('active')
});

var porsche911Audio = document.getElementById('porsche911Audio');
var imgPorsche911 = document.getElementById('imgPorsche911');

function iniciarRepr(){
    porsche911Audio.play();
    console.log("Reproduciendo Sonido")
}

imgPorsche911.addEventListener('click',iniciarRepr);