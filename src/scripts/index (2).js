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
