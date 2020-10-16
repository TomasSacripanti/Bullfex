function slider() {
    //Variables
    let slides = document.querySelectorAll('.slides');
    console.log(slides[0]);
    let arrowRight = document.querySelector('.right-arrow');
    let arrowLeft = document.querySelector('.left-arrow');
    let current = 0;

    setTimeout(() => {
        showNext();
    },10000)


    //Event Listeners
    arrowRight.addEventListener('click', (e) => {
        e.preventDefault();
        showNext();
    });

    arrowLeft.addEventListener('click', (e) => {
        e.preventDefault();
        showPrev();
    })

    //Funciones
    function showNext() {
        if(current === 0) {
            slides[0].style.transform = `translate(-${100 / 3}%)`;
            current += 1;
        } else if (current === 1){
            slides[0].style.transform = `translate(-${(100 / 3) * 2}%)`;
            current += 1;
        } else {
            slides[0].style.transform = `translate(0%)`;
            current = 0;
        }
    }

    function showPrev() {
        if(current === 0) {
            slides[0].style.transform = `translate(-${(100 / 3) * 2}%)`;
            current = 2;
        } else if (current === 1) {
            slides[0].style.transform = `translate(0%)`;
            current = 0;
        } else {
            slides[0].style.transform = `translate(-${100 / 3}%)`;
            current = 1;
        }
    }
}

export default slider;