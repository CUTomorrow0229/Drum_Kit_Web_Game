// Button clicked action
var button = document.querySelectorAll(".drum");

for (var i = 0; i < button.length; i++){
    button[i].addEventListener("click", Button_clicked);
}

document.addEventListener("keydown", Keyboard_event);



function Button_clicked(){
    var activatedButtonText = this.innerHTML;
    Play_audio(activatedButtonText);
    Play_animation(activatedButtonText);
}

function Keyboard_event(event){
	var activatedButtonText = event.key
    Play_audio(activatedButtonText);
    Play_animation(activatedButtonText);
}



function Play_audio(activatedButtonText){
    switch (activatedButtonText){
        case "w":
            var audioW = new Audio('./sounds/tom-1.mp3');
            audioW.play();
            break;
        case "a":
            var audioA = new Audio('./sounds/tom-2.mp3');
            audioA.play();
            break;
        case "s":
            var audioS = new Audio('./sounds/tom-3.mp3');
            audioS.play();
            break;
        case "d":
            var audioD = new Audio('./sounds/tom-4.mp3');
            audioD.play();
            break;
        case "j":
            var audioJ = new Audio('./sounds/snare.mp3');
            audioJ.play();
            break;
        case "k":
            var audioK = new Audio('./sounds/crash.mp3');
            audioK.play();
            break;
        case "l":
            var audioL = new Audio('./sounds/kick-bass.mp3');
            audioL.play();
            break;
    }
}

function Play_animation(activatedButtonText){
    var activatedButton = document.querySelector("." + activatedButtonText);
    activatedButton.classList.toggle("pressed");
    setTimeout(function(){activatedButton.classList.toggle("pressed")}, 100);
}