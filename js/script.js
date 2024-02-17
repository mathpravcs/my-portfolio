const header = document.querySelector("header");

window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY>120);
});


var audio = document.getElementById('myAudio');

function toggleAudio() {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}


   

