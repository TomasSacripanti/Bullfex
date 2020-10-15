//Imports
import "../styles/styles.scss";
import addImage from "./Images";
import displayNav from "./Hamburger";
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

hamburger.addEventListener('click', () => {
    displayNav(navList, items);
});
