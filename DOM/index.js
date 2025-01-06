function buttonClickFunction() {
    var value = document.querySelector("p").innerHTML;
    var number = document.querySelector("p");
    number.innerHTML = Number(value) + Number(1);
}