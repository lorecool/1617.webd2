// When the user clicks on div, open the popup
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