document.addEventListener ('DOMContentLoaded')
    const carouselInner = document.querySelector ('.carousel-inner');
    const items = document.querySelectorAll ('.carousel-item');
    let currentIndex = 0;

function showSlide(index) {
    //Asegurarse de que el indice este dentro del rango
    if (index < 0 ) {
        currentIndex = items.length - 1;
    } else if ( index >= items.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Mover el contenedor interior del carrusel
    const offset = -currentIndex * 100;
    carouselInner.computedStyleMap.transform = 'translateX(${offset}%)'

    //Actualizar la clase 'active'
    items.forEach ( (item, i){
        if (i === currentIndex) {
            item.classList.add ('active');
        } else {
            item.classList.remove ('active');
        }
    });

    //Inicializar el carrusel
    showSlide(currentIndex);
}