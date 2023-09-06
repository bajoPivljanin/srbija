let srbaudio = new Audio('zvuk/Srbija.mp3')
let srb = document.querySelector('.srbija')

let albaudio = new Audio('zvuk/Albanija.mp3')
let alb = document.querySelector('.albanija')

let bihaudio = new Audio('zvuk/Bosna i Hercegovina.mp3')
let bih = document.querySelector('.bih')

let cgaudio = new Audio('zvuk/Crna Gora.mp3')
let cg = document.querySelector('.cg')

let bgaudio = new Audio('zvuk/Bugarska.mp3')
let bg = document.querySelector('.bg')

let mkdaudio = new Audio('zvuk/Makedonija.mp3')
let mkd = document.querySelector('.mkd')

let hudaudio = new Audio('zvuk/Madjarska.mp3')
let hu = document.querySelector('.hu')

let hrdaudio = new Audio('zvuk/Hrvatska.mp3')
let hr = document.querySelector('.hr')

let rudaudio = new Audio('zvuk/Rumunija.mp3')
let ru = document.querySelector('.ru')

function playAudio(audioname) {
    if (audioname.paused) {
        audioname.play();
    }
}
function stopAudioOnLeave(audioname) {
    audioname.pause();
    audioname.currentTime = 0; // Rewind to the beginning
}

srb.addEventListener('mouseenter', function() {
    playAudio(srbaudio);
});

alb.addEventListener('mouseenter', function() {
    playAudio(albaudio);
});

bih.addEventListener('mouseenter', function() {
    playAudio(bihaudio);
});

cg.addEventListener('mouseenter', function() {
    playAudio(cgaudio);
});

bg.addEventListener('mouseenter', function() {
    playAudio(bgaudio);
});

mkd.addEventListener('mouseenter', function() {
    playAudio(mkdaudio);
});

hu.addEventListener('mouseenter', function() {
    playAudio(hudaudio);
});

hr.addEventListener('mouseenter', function() {
    playAudio(hrdaudio);
});

ru.addEventListener('mouseenter', function() {
    playAudio(rudaudio);
});

//leave

srb.addEventListener('mouseleave', function() {
    stopAudioOnLeave(srbaudio);
});

alb.addEventListener('mouseleave', function() {
    stopAudioOnLeave(albaudio);
});
bih.addEventListener('mouseleave', function() {
    stopAudioOnLeave(bihaudio);
});

cg.addEventListener('mouseleave', function() {
    stopAudioOnLeave(cgaudio);
});

bg.addEventListener('mouseleave', function() {
   stopAudioOnLeave(bgaudio);
});

mkd.addEventListener('mouseleave', function() {
    stopAudioOnLeave(mkdaudio);
});

hu.addEventListener('mouseleave', function() {
   stopAudioOnLeave(hudaudio);
});

hr.addEventListener('mouseleave', function() {
   stopAudioOnLeave(hrdaudio);
});

ru.addEventListener('mouseleave', function() {
    stopAudioOnLeave(rudaudio);
});

