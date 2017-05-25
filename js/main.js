// When the user clicks on div, open the popup
function openNav() {
    document.getElementById("sideNav").style.width = "100%";
    document.getElementById("menu").style.height = "0px";

}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("menu").style.height = "1000px";
}

function portfolioDetail() {
    var popup = document.getElementById("portfolioDetail");
    popup.classList.toggle("show");
}

function disclaimerDetail() {
    var popup = document.getElementById("disclaimerDetail");
    popup.classList.toggle("show");
}

function copyrightYear() {
    var currentYear = new Date().getFullYear();
    document.write(currentYear);
}