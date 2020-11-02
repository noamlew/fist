const img = document.getElementById("image");

const Punch = new Audio();
Punch.src = "audio/Punch Sound Effects All Sounds (mp3cut.net).mp3";

document.addEventListener("mousedown", () => {
    img.src = "image/download (5).jpg";
    document.body.style.background = "red";
    Punch.play();
})

document.addEventListener("mouseup", () => {
    img.src = "image/2602451-46.jpg";
    document.body.style.background = "cornflowerblue";
})