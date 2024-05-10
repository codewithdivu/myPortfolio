// preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
// ===================CHANGE BACKGROUND HEADER=====================

function scrollHeader() {
  const header = document.getElementById("header");
  // when scroll is greater than 50 viewport height add scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// ====================SERVICES MODAL=====================

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

// ================== scrollview select==================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 30,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active__link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active__link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// ================= LIGHT DARK THEME =================

// const themeButton = document.getElementById('theme-button')
// const lightTheme = 'light-theme'
// const iconTheme = 'bx-sun'

// //Previously selected theme

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// //We obtain current theme that the interface has by validating dark theme class

// const getCurrentTheme = ()=> document.body.classList.contains(lightTheme) ? 'dark': 'light'
// const getCurrentIcon = ()=> document.body.classList.contains(iconTheme) ? 'bx bx-moon': 'bx bx-sun'

// //We validate if user previously choose a topic
// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
//     themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
// }

// //Activate Deactivate theme manually with btn

// themeButton.addEventListener('click', ()=> {
//     //add or remove light theme
//     document.body.classList.toggle(lightTheme)
//     themeButton.classList.toggle(iconTheme)

//     // We save the theme and icon that user choose
//     localStorage.setItem('selected-theme', getCurrentTheme)
//     localStorage.setItem('selected-icon', getCurrentIcon)
// })

// work mixitup filter
var mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

//link active work
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

//animate content
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // if want animation again and again then write else condition
    // else {
    //     // entry.target.classList.remove("show")
    // }
  });
});

const hiddenElementsY = document.querySelectorAll(".hidden");
const hiddenElementsX = document.querySelectorAll(".hidden_left");
hiddenElementsY.forEach((el) => observer.observe(el));
hiddenElementsX.forEach((el) => observer.observe(el));
