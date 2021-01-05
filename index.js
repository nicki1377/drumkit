
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

document.getElementByClass("w drum").addEventListener("click", playAudio("tom-1.mp3"));
document.getElementByClass("a drum").addEventListener("click", playAudio("tom-2.mp3"));
document.getElementByClass("s drum").addEventListener("click", playAudio("tom-3.mp3"));
document.getElementByClass("d drum").addEventListener("click", playAudio("tom-4.mp3"));
document.getElementByClass("j drum").addEventListener("click", playAudio("snare.mp3"));
document.getElementByClass("k drum").addEventListener("click", playAudio("crash.mp3"));
document.getElementByClass("l drum").addEventListener("click", playAudio("kick-bass.mp3"));
