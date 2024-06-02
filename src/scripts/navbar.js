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