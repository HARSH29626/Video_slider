// video slider

const btns = document.querySelectorAll(".nav-btn");
const slider = document.querySelectorAll(".video-slid");
const content = document.querySelectorAll(".content");



var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slider.forEach((slide) => {
        slide.classList.remove("active");
    });

    content.forEach((conte) => {
        conte.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slider[manual].classList.add("active");
    content[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});