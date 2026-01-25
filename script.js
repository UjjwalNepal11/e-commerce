function updateButtons(slide, leftBtn, rightBtn) {
  const maxScroll = slide.scrollWidth - slide.clientWidth;
  if (slide.scrollLeft <= 0) {
    leftBtn.style.opacity = "0.5";
  } else {
    leftBtn.style.opacity = "1";
  }
  if (slide.scrollLeft >= maxScroll - 1) {
    rightBtn.style.opacity = "0.5";
  } else {
    rightBtn.style.opacity = "1";
  }
}
function initSlider(slideSelector, leftBtnSelector, rightBtnSelector) {
  const leftBtn = document.querySelector(leftBtnSelector);
  const rightBtn = document.querySelector(rightBtnSelector);
  const slide = document.querySelector(slideSelector);
  updateButtons(slide, leftBtn, rightBtn);
  slide.addEventListener("scroll", () =>
    updateButtons(slide, leftBtn, rightBtn),
  );
  rightBtn.addEventListener("click", function (event) {
    slide.scrollLeft += 1100;
    event.preventDefault();
  });
  leftBtn.addEventListener("click", function (event) {
    slide.scrollLeft -= 1100;
    event.preventDefault();
  });
}
initSlider(".product-slide", ".l-btn", ".r-btn");
initSlider(".product-slide-1", ".btn-1b", ".btn-1a");
initSlider(".product-slide-2", ".btn-1c", ".btn-1d");

document
  .querySelectorAll(".product-slide, .product-slide-1, .product-slide-2")
  .forEach((slide) => {
    slide.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    });
  });
const backtop = document.querySelector(".backtop");
backtop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");
sidebtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  cross.classList.add("active");
  black.classList.add("active");
  document.body.classList.add("stop-scroll");
});
cross.addEventListener("click", () => {
  sidebar.classList.remove("active");
  cross.classList.remove("active");
  black.classList.remove("active");
  document.body.classList.remove("stop-scroll");
});
black.addEventListener("click", () => {
  sidebar.classList.remove("active");
  cross.classList.remove("active");
  black.classList.remove("active");
  document.body.classList.remove("stop-scroll");
});
document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !sidebtn.contains(e.target)
  ) {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
  }
});
let hideTimeout;
const sign = document.querySelector(".sign");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");
sign.addEventListener("mouseenter", () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  signin.classList.add("active");
  tri.classList.add("active");
  black.classList.add("active-signin");
});
sign.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    signin.classList.remove("active");
    tri.classList.remove("active");
    black.classList.remove("active-signin");
  }, 100);
});
signin.addEventListener("mouseenter", () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  signin.classList.add("active");
  tri.classList.add("active");
  black.classList.add("active-signin");
});
signin.addEventListener("mouseleave", () => {
  signin.classList.remove("active");
  tri.classList.remove("active");
  black.classList.remove("active-signin");
  document.body.classList.remove("stop-scroll");
});
const logo = document.querySelector(".logo a");
logo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.reload();
});
let lastScrollTop = 0;
const firstHeader = document.querySelector(".first");
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 60) {
    firstHeader.style.transform = "translateY(-100%)";
  } else if (scrollTop < lastScrollTop) {
    firstHeader.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  if (hideTimeout) clearTimeout(hideTimeout);
  signin.classList.remove("active");
  tri.classList.remove("active");
  black.classList.remove("active-signin");
  searchOverlay.classList.remove("active");
});
const productCompLinks = document.querySelectorAll(".product-comp a");
productCompLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
const searchInput = document.querySelector(".input input");
const searchOverlay = document.querySelector(".search-overlay");
const searchMessage = document.querySelector(".search-message");
function toggleSearchOverlay() {
  if (searchInput.value.trim() !== "") {
    searchOverlay.classList.add("active");
  } else {
    searchOverlay.classList.remove("active");
  }
}
searchInput.addEventListener("input", toggleSearchOverlay);
searchInput.addEventListener("focus", toggleSearchOverlay);
searchInput.addEventListener("blur", () => {
  setTimeout(() => {
    if (!searchInput.matches(":focus")) {
      searchOverlay.classList.remove("active");
    }
  }, 100);
});
searchOverlay.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
  searchInput.blur();
});
function performSearch() {
  if (searchInput.value.trim() !== "") {
    searchInput.value = "";
    searchMessage.textContent = "Sorry, no results found.";
    searchMessage.classList.add("active");
    searchOverlay.classList.remove("active");
    searchInput.blur();
    setTimeout(() => {
      searchMessage.classList.remove("active");
    }, 3000);
  }
}
document
  .querySelector(".input .fa-search")
  .addEventListener("click", performSearch);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});
function hideNotice() {
  document.getElementById("demo-notice").style.display = "none";
}
