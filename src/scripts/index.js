//Imports
import "../styles/styles.scss";
import addImage from "./Images";
import displayNav from "./Hamburger";
import slider from "./Slider.js"
import bullfexlogo from "../resources/images/logotipo-bullfex.svg";


//Variables y constantes
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const items = document.querySelectorAll('.nav-item');



//Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    let  logoContainer = document.querySelector('.img-container');
    let footerImgContainer = document.querySelector('.img-footer-container');
    addImage(logoContainer, bullfexlogo, 'Logotipo Bullfex');
    addImage(footerImgContainer, bullfexlogo, 'Logotipo Bullfex');
    slider();
});

hamburger.addEventListener('click', () => {
    displayNav(navList, items);
});
