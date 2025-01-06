function rollDices() {
    var diceOne = Math.ceil(Math.random() * 6);
    var diceTwo = Math.ceil(Math.random() * 6);

    var imgs = document.querySelectorAll("img");

    imgs[0].setAttribute("src", "images/dice" + diceOne + ".png");
    imgs[1].setAttribute("src", "images/dice" + diceTwo + ".png");

    if(diceOne > diceTwo) {
        document.querySelector("h1").innerHTML = "Player 1 wins."
    }
    else if(diceTwo > diceOne) {
        document.querySelector("h1").innerHTML = "Player 2 wins."
    }
    else {
        document.querySelector("h1").innerHTML = "No one won."
    }

    

}