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