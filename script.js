let music = document.querySelector('.music-element')
let playBtn = document.querySelector('.play')
let seekbar = document.querySelector('.seekbar')
let currentTime = document.querySelector('.current-time')
let duration = document.querySelector('.duration')

function handlePlay() {
    if(music.paused) {
        music.play();
        playBtn.className = 'pause'
        playBtn.innerHTML = '<i class = "material-icons">pause</i>'
    } else {
        music.pause();
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class = "material-icons">play_arrow</i>'
    }

    music.addEventListener('ended', function() {
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class = "material-icons">play_arrow</i>'
        music.currentTime = 0
    });
}

music.onloadeddata = function() {
    seekbar.max = music.duration
    let ds = parseInt(music.duration % 60)
    let dm = parseInt((music.duration / 60) % 60)
    duration.innerHTML = dm + ':' + ds
}

music.ontimeupdate = function() {seekbar.value = music.currentTime}
handleSeekBar = function() {music.currentTime = seekbar.value}
music.addEventListener('timeupdate', function() {
    let cs = parseInt(music.currentTime % 60)
    let cm = parseInt((music.currentTime / 60) % 60)
    currentTime.innerHTML = cm + ':' + cs
}, false)

