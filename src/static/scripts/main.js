
var header = document.getElementById("headerMenu");

var sticky = header.offsetTop;

window.onscroll = function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// -------------------------------------------------------
//    Navigation menu slide in
// -------------------------------------------------------

document.getElementById("menu-open").addEventListener("click", openNav);
document.getElementById("menu-close").addEventListener("click", closeNav);

function openNav() {
  document.getElementById("nav__menu").style.cssText = "animation: open .3s forwards;";
}

function closeNav() {
  document.getElementById("nav__menu").style.cssText = "animation: close .3s forwards;";
}