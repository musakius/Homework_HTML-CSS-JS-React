let text = document.getElementById("text");
let but = document.getElementById("but");
let spisok = document.getElementById("spisok");
let id;
let files = document.getElementById('file');
let audio = document.querySelector('audio');
let currentVolume = document.getElementById('current_volume');
let timerId;
let init = 0;

function duration(sec) {
    let min = Math.floor(sec / 60);
    sec = Math.floor(sec % 60);
    if (sec.toString().length == 1) sec = '0' + sec;
    if (min.toString().length == 1) min = '0' + min;
    let result = (min + ':' + sec);
    return result;
}
function number(num) {
    num = num + 1;
    if (num.toString().length == 1) num = '0' + num;
    return num;
}
async function get() {
    but.addEventListener('click', function () {
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + text.value)
            .then(function (response) {
                response.json().then(add => {
                    spisok.innerHTML = "";
                    for (let i = 0; i < add.data.length - 1; i++) {
                        console.log(add.data[i]);
                        let tr = document.createElement("li");
                        tr.className = add.data[i].id;
                        tr.innerHTML = '<span class="number">' + number(i) + '</span>' +
                                       '<span class="track">' + add.data[i].title + '</span>' +
                                       '<span class="artist"> - ' + add.data[i].artist.name + '</span>' +
                                       '<span class="time">' + duration(add.data[i].duration) + '</span>';
                        spisok.append(tr);
                        tr.style.background = "rgbrgb(35, 34, 41)";
                        tr.addEventListener('click', function () {
                            DZ.player.playTracks([tr.className]);
                            let url = add.data[i].artist.picture_xl;
                            document.querySelector('.photo').style.backgroundImage = 'url(' + url + ')';
                        });
                        
                    }
                    DZ.player.playTracks([id]);
                    return id;
                });
            })
            .catch(error => {
                console.log(error)
            });
    });
}
DZ.init({
    appId: '394844',
    channelUrl: 'index.html',
    player: {
        container: 'player',
        cover: true,
        playlist: true,
        width: 800,
        height: 91,
        onload: get
    }
});

function display(visibleId) {

    switch (visibleId) {
        case "player_deezer":
            document.getElementById("player_user").style.display = "none";
            document.getElementById("authorization").style.display = "none";
            document.getElementById("player_deezer").style.display = "block";
            break;
        case "authorization":
            document.getElementById("player_user").style.display = "none";
            document.getElementById("authorization").style.display = "flex";
            document.getElementById("player_deezer").style.display = "none";
            break;
        case "player_user":
        default:
            document.getElementById("player_user").style.display = "flex";
            document.getElementById("authorization").style.display = "none";
            document.getElementById("player_deezer").style.display = "none";
    }
}
display("player_deezer");

document.getElementById("but_add").addEventListener("click", function () {
    display("authorization");
    document.getElementById("authorization").style.display = "";
});
document.getElementById("but_deez").addEventListener("click", function () {
    display("player_deezer");
    document.getElementById("player_deezer").style.display = "";
});
document.getElementById("but_player").addEventListener("click", function () {
    display("player_user");
    document.getElementById("player_user").style.display = "";
});
function currentProcess(){
    time2.innerHTML = duration(audio.currentTime); 
    progress.value = audio.currentTime / audio.duration;
}
play.addEventListener('click', function () {
    if (init == 0) {
        audio.play(); 
        timerId = setInterval(currentProcess, 1000);
        init = 1;
        play.className = "fas fa-pause";
    } else {
        audio.pause(); 
        clearInterval(timerId);
        init = 0;
        play.className = "fas fa-play";
    }
});

progress.addEventListener('click', function(e) {
    let pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
    audio.currentTime = pos * audio.duration;
    progress.value = pos;
 });
progress2.addEventListener('click', function(e) {
    let pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
    progress2.value = pos;
    audio.volume = pos;
 });


files.addEventListener('change', function(){
    audio.src = URL.createObjectURL(this.files[0]); 
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}

/* function setPlusVolume() { 
    audio.volume = audio.volume + 0.1;
    currentVolume.innerHTML = audio.volume.toFixed(1) * 100 + '%';
    if (audio.volume >= 1) {
        audio.volume = 1;
    }
} 

function setMinusVolume() { 
    audio.volume = audio.volume - 0.1;
    currentVolume.innerHTML = audio.volume.toFixed(1) * 100 + '%';
    if (audio.volume <= 0) {
        audio.volume = 0;
        
    }
}  */
/* function playAudio() { 
    audio.play(); 
    timerId = setInterval(currentProcess, 1000);
} 

function pauseAudio() {
    audio.pause(); 
    clearInterval(timerId);
}  */
