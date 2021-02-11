function prelude() {
    startPreludeTitleWithInterval();
}

function startPreludeTitleWithInterval() {
    setTimeout(() => {
        setInterval(fetchPreludeTitle, 60);
    }, 2000);
}

function fetchPreludeTitle() {
    const preludeTitle = document.querySelectorAll(".prelude-container span");  
    setClassToLetter(preludeTitle);
}

function setClassToLetter(preludeTitle) {
    for (let i = 0; i < preludeTitle.length; i++) {
        
        if (preludeTitle[i].classList.contains("fade")) {
            preludeTitle[i].classList.remove("fade");
            preludeTitle[i].classList.add("fill");
            break;
        }
    }
}