

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

var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "music,party");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "unk63DzzpkMVQX8FTdvpN0KbDYavAzWI");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}
