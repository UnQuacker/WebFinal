function errorMessage() {
  document.getElementById("placeholder").innerHTML = "<p style='color: #E3000B;'>An Error Has Occurred, please try later</p>";
}

var random = Math.floor(Math.random() * 3) + 1

function makeSound(){
  if (random==1){
  var sound = new Audio("./sounds/win.mp3")
  sound.play()
  }
  else if(random==2) {
  var sound = new Audio("./sounds/lose.mp3")
  sound.play()
  }
  else if(random==3) {
  var sound = new Audio("./sounds/rick_roll.mp3")
  sound.play()
  }
}

function getGift(){
  if (random==1){
  alert("You Won 0$! Congratulations!")
  }
  else if(random==2) {
  alert("You Won nothing :c")
  }
  else if(random==3) {
  alert("Get Rick Rolled, lol")
  }
}

function getWinner(){
  makeSound()
  getGift()
  document.getElementById("present").classList.toggle("transparent")
}

document.addEventListener("keypress", function(event) {animator(event.key)})

function animator(key){
  if (key=="]"){
    document.getElementById("present").classList.toggle("transparent")
  }
}
