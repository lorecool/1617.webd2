// When the user clicks on div, open the popup
function openNav() {
    document.getElementById("sideNav").style.width = "100%";
    document.getElementById("menu").style.height = "0px";

}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("menu").style.height = "1000px";
}

//Scroll knop


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("naarBoven").style.display = "block";
    } else {
        document.getElementById("naarBoven").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
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