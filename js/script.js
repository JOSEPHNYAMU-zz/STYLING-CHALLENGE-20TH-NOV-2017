function tplayers() {
    var img = document.getElementById('players').src;
    if (img.indexOf('play.svg') != -1) {
        document.getElementById('players').src = 'img/pause.png';
        $('#players').css({
            'border-radius': '50%',
            'transition': 'all 0.5s linear'

        });
    }
    else {
        document.getElementById('players').src = 'img/play.svg';
        $('#players').css({
            'border-radius': '50%',
            'transition': 'all 0.5s linear'

        });
    }

}

var vid = document.getElementById("back-video");
var pauseButton = document.querySelector("#players");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
    vid.pause();
// to capture IE10
    vidFade();
});


pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
    } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
    }
})
