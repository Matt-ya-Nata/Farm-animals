

var numberOfDrumButtons = document.querySelectorAll(".animal").length;
for (var i = 0; i<numberOfDrumButtons; i++ ){

  document.querySelectorAll(".animal")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "Cow":
      var cow = new Audio("sounds/cow-sound.mp3");
            cow.play();
            break;
      case "Donkey":
       var donkey = new Audio("sounds/donkey-sound.mp3");
            donkey.play();
            break;
        case "Horse":
        var horse = new Audio("sounds/horse-sound.mp3");
            horse.play();
            break;
        case "Goat":
        var goat = new Audio("sounds/goat-sound.mp3");
            goat.play();
            break;
        case "Sheep":
        var sheep = new Audio("sounds/sheep-sound.mp3");
        sheep.play();
        break;
        case "Chicken":
            var chicken = new Audio("sounds/chicken-sound.mp3");
            chicken.play();
            break;

      case "Duck":
            var duck = new Audio("sounds/duck-sound.mp3");
            duck.play();
            break;
      
      default: console.log();

    }

  }) ; //two parameters the first one is the type case sensitive nd the secon one is a listnerjavascript listener


}


//  var audio = new Audio("sounds/crash.mp3");
//  audio.play();

<!-- Revive Adserver Hosted edition Asynchronous JS Tag - Generated with Revive Adserver v5.5.1 -->
<ins data-revive-zoneid="19489" data-revive-id="727bec5e09208690b050ccfc6a45d384"></ins>
<script async src="//servedby.revive-adserver.net/asyncjs.php"></script>
