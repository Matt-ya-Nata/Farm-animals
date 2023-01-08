

var numberOfDrumButtons = document.querySelectorAll(".animal").length;
for (var i = 0; i<numberOfDrumButtons; i++ ){

  document.querySelectorAll(".animal")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "a":
      var cow = new Audio("sounds/cow-sound.mp3");
            cow.play();
            break;
      case "s":
       var donkey = new Audio("sounds/donkey-sound.mp3");
            donkey.play();
            break;
        case "d":
        var horse = new Audio("sounds/horse-sound.mp3");
            horse.play();
            break;
        case "f":
        var goat = new Audio("sounds/goat-sound.mp3");
            goat.play();
            break;
        case "g":
        var sheep = new Audio("sounds/sheep-sound.mp3");
        sheep.play();
        break;
        case "h":
            var chicken = new Audio("sounds/chicken-sound.mp3");
            chicken.play();
            break;

      case "j":
            var duck = new Audio("sounds/duck-sound.mp3");
            duck.play();
            break;
      
      default: console.log();

    }

  }) ; //two parameters the first one is the type case sensitive nd the secon one is a listnerjavascript listener


}


//  var audio = new Audio("sounds/crash.mp3");
//  audio.play();
