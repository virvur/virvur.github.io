document.addEventListener("DOMContentLoaded", () => {
  mobileMenu_init();

  window.addEventListener("resize", () => {
    mobileMenu_init();
  });
});

/*** Mobile Menu */

function mobileMenu_show() {
  return window.matchMedia("(max-width: 668.9px)").matches ? true : false;
}

function mobileMenu_init() {
  if (mobileMenu_show()) {
    if (document.querySelector("#mobile-menu") == null) {
      document.querySelector(".header .navbar").innerHTML +=
        '<div id="mobile-menu"><span></span><span></span><span></span></div>';
      mobileMenu_build();
      document
        .querySelector("#mobile-menu")
        .addEventListener("click", function (event) {
          event.preventDefault();
          mobileMenu_toggle();
        });

      document.querySelectorAll("#mobile-menu-content a").forEach((item) => {
        item.addEventListener("click", (event) => {
          document.getElementById("mobile-menu").classList.remove("open");
          document
            .getElementById("mobile-menu-content")
            .classList.remove("open");
        });
      });

      document
        .querySelector(".logo a")
        .addEventListener("click", function (event) {
          mobileMenu_toggle();
        });
    }
  } else {
    mobileMenu_destroy();
  }
}

function mobileMenu_build() {
  let menu_content = document.createElement("div");
  menu_content.setAttribute("id", "mobile-menu-content");
  document.body.append(menu_content);

  let menu_content_overflow = document.createElement("div");
  menu_content.appendChild(menu_content_overflow);

  let navigation_clone = document
    .querySelector(".header .navbar > ul")
    .cloneNode(true);

  navigation_clone.classList.remove("menu");

  menu_content_overflow.appendChild(navigation_clone);
}

function mobileMenu_toggle() {
  document.getElementById("mobile-menu").classList.toggle("open");
  document.getElementById("mobile-menu-content").classList.toggle("open");
}

function mobileMenu_destroy() {
  let mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu != null) {
    mobileMenu.remove();
    document.getElementById("mobile-menu-content").remove();
  }
}
