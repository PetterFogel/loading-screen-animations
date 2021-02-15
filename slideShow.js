function slideShow() {
    setTimeout(() => {
        startPreludeSlide();
    }, 3000);
    setTimeout(() => {
        startFirstSlide();
    }, 3200);
    setTimeout(() => {
        startSecondSlide();
    }, 3400);
}

function startPreludeSlide() {
    const preludeContainer = document.querySelector(".prelude-container");
    preludeContainer.classList.add("slide-right");
}

function startFirstSlide() {
    const firstSlide = document.querySelector(".first-slide");
    firstSlide.style.transform = "translateY(-100%)"
}

function startSecondSlide() {
    const secondSlide = document.querySelector(".second-slide");
    secondSlide.style.transform = "translateY(-100%)"
}