// Botones
var btnKnowMore = document.querySelector('.btn');
var btnSend = document.querySelector('.login');

// Areas de la pagina
var form = document.querySelector('.contentBx');
var thanks = document.querySelector('.thanks');


btnKnowMore.onclick = function() {
    console.log('boton saber mas');
    form.classList.toggle('active');
}

btnSend.onclick = function() {
    thanks.classList.add('active');
    setTimeout(() => {
        form.classList.remove('active');
        thanks.classList.remove('active');
    }, 3000);
}