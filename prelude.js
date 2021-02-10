function prelude() {
    const preludeTitle = document.querySelector(".prelude-title");

    const sentence = preludeTitle.textContent.split("");
    for (let letter of sentence) {
        console.log(letter);
    }
}