function navBbar() {
  const stringX = window.location.pathname;

  if(!stringX.includes("views")) {
    document.getElementById("navBar").innerHTML = '<div class="navBarTop">'+
                                                    '<a href="index.html">DELICRAVE</a>'+
                                                    '<p onclick="navbarClick()">☰</p>'+
                                                  '</div>'+
                                                  '<ul id="navBarBottom">'+
                                                    '<li><a href="index.html">INICIO</a></li>'+
                                                    '<li><a href="./src/views/catalogue/catalogue.html">CATALOGO</a></li>'+
                                                    '<li><a href="index.html#sobre-nosotros" onclick="aboutUsChanger()">SOBRE NOSOTROS</a></li>'+
                                                    '<li><a href="./src/views/contactUs/contactUs.html">CONTACTO</a></li>'+
                                                    '<li><a href="./src/views/locations/locations.html">LOCACION</a></li>'+
                                                  '</ul>';
  } else {
    document.getElementById("navBar").innerHTML = '<div class="navBarTop">'+
                                                    '<a href="../../../index.html">DELICRAVE</a>'+
                                                    '<p onclick="navbarClick()">☰</p>'+
                                                  '</div>'+
                                                  '<ul id="navBarBottom">'+
                                                    '<li><a href="../../../index.html">INICIO</a></li>'+
                                                    '<li><a href="../catalogue/catalogue.html">CATALOGO</a></li>'+
                                                    '<li><a href="../../../index.html#sobre-nosotros">SOBRE NOSOTROS</a></li>'+
                                                    '<li><a href="../contactUs/contactUs.html">CONTACTO</a></li>'+
                                                    '<li><a href="../locations/locations.html">LOCACION</a></li>'+
                                                  '</ul>';
  }
}