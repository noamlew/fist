const img = document.getElementById("image");

const Punch = new Audio();
Punch.src = "audio/Punch Sound Effects All Sounds (mp3cut.net).mp3";

let setTime = setTimeout(() => console.log("welcome the game"), 10);

document.addEventListener("mousedown", () => {
    clearTimeout(setTime);
    img.src = "image/download (5).jpg";
    document.body.style.background = "red";
    Punch.play();
    setTime = setTimeout(() => {
        img.src = "image/2602451-46.jpg";
        document.body.style.background = "cornflowerblue";
    }, 1300);
})
