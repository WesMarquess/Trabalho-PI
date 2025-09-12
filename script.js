
const video = document.getElementById('video');
video.playbackRate = 0.99;

const musica = document.getElementById('musica');
musica.src = "musics/beat021.wav";

const imagem = document.getElementById("img");

imagem.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

