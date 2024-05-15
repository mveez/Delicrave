let state = true;

function navbarClick() {

    const navBarBottom = document.getElementById("navBarBottom");
    const catalogueSection = document.getElementById("catalogueSection");

    if(state == true) {
        navBarBottom.style.display = "flex";
        catalogueSection.style.margin = "32rem 0rem";
        state = false;
    } else {
        navBarBottom.style.display = "none";
        catalogueSection.style.margin = "12rem 0rem";
        state = true;
    }
}