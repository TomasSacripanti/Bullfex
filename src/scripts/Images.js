function addImage(cont, img, msg) {
    let imagen = document.createElement('img');
    imagen.src = img;
    imagen.alt = msg;
    cont.appendChild(imagen);
}

export default addImage;