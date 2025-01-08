
const array = document.querySelectorAll(".drum");

for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    });

    const makeSound = (button) => {
        switch (button) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
    
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/kick.mp3");
                audio.play();
                break;
        }
    }

    document.addEventListener("keydown", function (event) {
        playSound(event.key);

        buttonAnimation(event.key);
    });
    
    const playSound = (key) => {
        switch (key) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
    
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
    
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
    
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
    
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
    
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
    
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        }
    }

    function buttonAnimation(pressedKey) {
        var activeButton = document.querySelector("." + pressedKey);

        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 300)


    }
}




