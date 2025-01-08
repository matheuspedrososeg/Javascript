

document.addEventListener("keydown", function (event) {
    movePlayer(event.key)
});

function movePlayer(key) {
    var player = document.getElementsByClassName("player")[0];

    var container = document.getElementsByClassName("map-container")[0];

    var topMargin = parseInt(player.style.marginTop || 0);
    var leftMargin = parseInt(player.style.marginLeft || 0);
    var rightMargin = parseInt(player.style.marginRight) || 0;

    switch (key) {
        case "w":
            player.style.marginTop = (topMargin - 15) + "px";
            break;

        case "a":
            player.style.marginRight = (rightMargin + 15) + "px";
            break;
        case "s":
            player.style.marginTop = (topMargin + 15) + "px";
            break;

        case "d":
            player.style.marginLeft = (leftMargin + 15) + "px";
            break;

        default:
            break;
    }
}