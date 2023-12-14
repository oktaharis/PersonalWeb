// toggle class aktive buat responsive hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// ini untuk tampilan About me
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// toggle class aktive buat responsive search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  // gunanya sama kaya autofocus
  searchBox.focus();
  e.preventDefault();
};
// toggle class active untuk shopping-cart
const shoppingCart = document.querySelector(".nav-sisi");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
// klik diluar slidebar untuk menghilangkan nav dan hamburger
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const modals = document.querySelectorAll(".modal");

// loop
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    const modalId = btn.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.style.display = "flex";
      e.preventDefault();
    }
  };
});

// klik tombol close
document.querySelectorAll(".close-icon").forEach((closeIcon) => {
  closeIcon.onclick = (e) => {
    const modal = closeIcon.closest(".modal");
    if (modal) {
      modal.style.display = "none";
      e.preventDefault();
    }
  };
});

window.onclick = (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};

