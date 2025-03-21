// Detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document
        .querySelectorAll(".drum")
        [i].addEventListener("click", function () {
            checkCharacter(this.innerHTML)
            buttonAnimation(this.innerHTML)
        })
}

// Detecting key press
document.addEventListener("keydown", function (event) {
    checkCharacter(event.key)
    buttonAnimation(event.key)
})

// Playing sounds based on character
function checkCharacter(char) {
    switch (char) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            break
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()
            break
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
            break
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play()
            break
        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play()
            break
        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
            break
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play()
            break

        default:
            console.log(this.innerHTML)
            break
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`)
    activeButton.classList.add("pressed")
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
}
