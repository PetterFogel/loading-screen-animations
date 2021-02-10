function prelude() {
    const preludeTitle = document.querySelectorAll(".prelude-container span");
    for (let letter of preludeTitle) {
        letter.classList.add("fade");
    }
}