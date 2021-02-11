function slideShow() {
    setTimeout(() => {
        const preludeContainer = document.querySelector(".prelude-container");
        preludeContainer.classList.add("slide-right");
    }, 3000);
    setTimeout(() => {
        const firstSlide = document.querySelector(".first-slide");
        firstSlide.style.transform = "translateY(-100%)"
        setTimeout(() => {
            const secondSlide = document.querySelector(".second-slide");
            secondSlide.style.transform = "translateY(-100%)"
        }, 200);
    }, 3200);
}