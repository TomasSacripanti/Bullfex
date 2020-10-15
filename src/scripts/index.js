//Imports
import "../styles/styles.scss";
import bullfexlogo from "../resources/images/logotipo-bullfex.svg";

//Variables
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const items = document.querySelectorAll('.nav-item');


//Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    let  logoContainer = document.querySelector('.img-container');
    addImage(logoContainer, bullfexlogo, 'Logotipo Bullfex');
});

hamburger.addEventListener('click', displayNav);


//Funciones

function addImage(cont, img, msg) {
    let imagen = document.createElement('img');
    imagen.src = img;
    imagen.alt = msg;
    cont.appendChild(imagen);
}

function displayNav() {
    navList.classList.toggle('open');
    items.forEach(item => {
        item.classList.toggle('fade');
    })
}