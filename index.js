let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function navBbar() {
  document.getElementById("navBar").innerHTML = '<div class="navBarTop">'+
                                                  '<a href="/src/index.html">DELICRAVE</a>'+
                                                  '<p onclick="navbarClick()">☰</p>'+
                                                '</div>'+
                                                '<ul id="navBarBottom">'+
                                                  '<li><a href="/src/index.html">INICIO</a></li>'+
                                                  '<li><a href="/src/views/catalogue/catalogue.html">CATALOGO</a></li>'+
                                                  '<li><a href="/src/index.html#aboutUs">SOBRE NOSOTROS</a></li>'+
                                                  '<li><a href="/src/views/contactUs/contactUs.html">CONTACTO</a></li>'+
                                                  '<li><a href="/src/views/locations/locations.html">LOCACION</a></li>'+
                                                '</ul>';
}
let state = true;

function navbarClick() {

    const navBarBottom = document.getElementById("navBarBottom");
    const firstSection = document.getElementsByClassName("firstSection");

    if(state == true) {
        navBarBottom.style.display = "flex";
        firstSection[0].style.margin = "38rem 0rem";
        state = false;
    } else {
        navBarBottom.style.display = "none";
        firstSection[0].style.margin = "12rem 0rem";
        state = true;
    }
}