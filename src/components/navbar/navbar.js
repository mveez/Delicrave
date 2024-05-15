function navBbar() {
    document.getElementById("navBar").innerHTML = '<div class="navBarTop">'+
                                                    '<a href="/src/index.html">DELICRAVE</a>'+
                                                    '<p onclick="navbarClick()">☰</p>'+
                                                  '</div>'+
                                                  '<ul id="navBarBottom">'+
                                                    '<li><a href="/src/index.html">HOME</a></li>'+
                                                    '<li><a href="/src/views/catalogue/catalogue.html">CATALOGUE</a></li>'+
                                                    '<li><a href="/src/views/aboutUs/aboutUs.html">ABOUT US</a></li>'+
                                                    '<li><a href="/src/views/locations/locations.html">LOCATIONS</a></li>'+
                                                  '</ul>';
}