let floortom = new Audio("sounds/floortom.mp3");
let kick = new Audio("sounds/kick.mp3");
let racktom = new Audio("sounds/racktom.mp3");
let rimshot = new Audio("sounds/rimshot.mp3");
let stickshot = new Audio("sounds/stickshot.mp3");
let crash = new Audio("sounds/crash.mp3");
let hihat = new Audio("sounds/hihat.mp3");

let count = 0


// cette fonction est lancée
// quand on clique sur un instrument (bouton orange)
function playSound(instrument) {
  // si jamais le son est déjà en train d'être joué
  // on remet le son à 0
  if (instrument.currentTime > 0) {
    instrument.currentTime = 0;
  }
  // on joue le son
  instrument.play();

  background.style.backgroundColor = pickRandomColor();

  count = count + 1
  if (count >= 5) {
    console.log ("ouh bravo")
    message.innerHTML = "Bravo ! Quel rythme !"
  }
  }


function onKeyDown(event) {
  if(event.keyCode == 65) {
    playSound(crash)
  }
  if(event.keyCode == 90) {
    playSound(racktom)
  }
  if(event.keyCode == 85) {
    playSound(rimshot)
  }
  if(event.keyCode == 81) {
    playSound(floortom)
  }
  if(event.keyCode == 13) {
    playSound(stickshot)
  }
  if(event.keyCode == 32) {
    playSound(kick)
  }
  if(event.keyCode == 80) {
    playSound(hihat)
  }
}
document.addEventListener("keydown", onKeyDown);



// une liste de couleurs, pour la question A.2
let colors = ["#7cabf4", "#7ed06a", "#ff957a", "#efb355", "#ff8e2b", "#b893ed"];

function pickRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
