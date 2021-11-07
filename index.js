var drumButtons = document.querySelectorAll("button", ".drum").length;

for (i = 0; i < drumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", clickReminder)


  function clickReminder() {

   var buttonClicked = this.innerHTML;

   makeSound(buttonClicked);

   buttonAnimation(buttonClicked);

  }
}


document.addEventListener("keydown", keyBoard);

function keyBoard(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}


function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;


    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default: console.log(buttonClicked);

  }

}


function buttonAnimation(clickedKey) {
      var activeButton = document.querySelector("." + clickedKey);

      activeButton.classList.add("pressed");

      setTimeout(timePressed, 100);
      function timePressed() {
        activeButton.classList.remove("pressed");
      }
}
