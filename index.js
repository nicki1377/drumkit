document.getElementById("wkey").addEventListener("click", function() {
    playAudio("sounds/tom-1.mp3");
});
document.getElementById("akey").addEventListener("click", function() {
    playAudio("sounds/tom-2.mp3");
});
document.getElementById("skey").addEventListener("click", function() {
    playAudio("sounds/tom-3.mp3");
});
document.getElementById("dkey").addEventListener("click", function() {
    playAudio("sounds/tom-4.mp3");
});
document.getElementById("jkey").addEventListener("click", function() {
    playAudio("sounds/snare.mp3");
});
document.getElementById("kkey").addEventListener("click", function() {
    playAudio("sounds/crash.mp3");
});
document.getElementById("lkey").addEventListener("click", function() {
    playAudio("sounds/kick-bass.mp3");
});

function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}