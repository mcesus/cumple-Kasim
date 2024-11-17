document.getElementById('sonido-imagen').addEventListener('click', function() {
    const audioElement = document.getElementById('audio');
   const isPlaying = !audioElement.paused;

  if (isPlaying) {
      audioElement.pause();
       this.src = './img/ion--play.svg'; // Cambia la imagen a "play"
    } else {
       audioElement.play();
       this.src = './img/ic--round-pause.svg'; // Cambia la imagen a "pause"
    }
});

function playSoundGarras() {
  var sound = document.getElementById("sonidoGarras");
  sound.play();
}