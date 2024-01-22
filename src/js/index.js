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
  const navMobile = document.querySelector(".nav-mobile");

  const avatarMobile = document.querySelector(".avatar-mobile");
  const nameMobile = document.querySelector(".name-mobile");

  navDes.classList.toggle("active-navDes");
  if (navDes.classList.contains("active-navDes")) {
    navDes.style.left = "0rem";
    navMobile.style.left = "var(--nav-width)";
    avatarMobile.style.display = "none";
    nameMobile.style.display = "none";
  } else {
    navDes.style.left = "-30rem";
    navMobile.style.left = "0rem";
    avatarMobile.style.display = "block";
    nameMobile.style.display = "block";
  }
  model.classList.toggle("show");
}

iconMenu.onclick = function () {
  togleMenu();
};
model.onclick = function () {
  if (this.classList.contains("show")) {
    togleMenu();
  }
};

const items = document.querySelectorAll(".menu-item-link");

items.forEach((item, i) => {
  item.onclick = () => {
    const isActive = item.classList.contains("active");
    items.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  };
});
const section = document.querySelectorAll(".section");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function (e) {
  sections[e.id] = e.offsetTop;
});

window.onscroll = function () {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  for (i in sections) {
    if (sections[i] - 200 <= scrollPosition) {
      document
        .querySelector(".menu-item-link.active")
        .classList.remove("active");
      document.querySelector('a[href="#' + i + '"]').classList.add("active");
    }
  }
};
