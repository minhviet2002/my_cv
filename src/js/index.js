const iconMenu = document.querySelector(".icon-menu");
const model = document.querySelector(".content");
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
window.onscroll = function () {
  myFunction();
};

function togleMenu() {
  const navDes = document.querySelector(".nav-desktop");
  const main = document.querySelector("#main");

  const avatarMobile = document.querySelector(".avatar-mobile");
  const nameMobile = document.querySelector(".name-mobile");

  
  navDes.classList.toggle("active-navDes");
  if (navDes.classList.contains("active-navDes")) {
    navDes.style.left = "0rem";
    main.style.paddingLeft = "30rem";
    avatarMobile.style.display = "none";
    nameMobile.style.display = "none";

  } else {
    navDes.style.left = "-30rem";
    main.style.paddingLeft = "0rem";
    avatarMobile.style.display = "block";
    nameMobile.style.display = "block";
  }
  model.classList.toggle("show");
}

iconMenu.onclick = function () {
  togleMenu();
};
model.onclick = function () {
  if(this.classList.contains("show")) { 
    togleMenu();
  }
  
};
