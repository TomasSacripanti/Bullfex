import "../styles/styles.scss";
import bullfexlogo from "../resources/images/logotipo-bullfex.svg";

document.addEventListener('DOMContentLoaded', () => {
    let  logoContainer = document.querySelector('.img-container');
    let bullfexImg = document.createElement('img');
    bullfexImg.src = bullfexlogo;
    bullfexImg.alt = 'Logotipo Bullfex';
    logoContainer.appendChild(bullfexImg);
});
