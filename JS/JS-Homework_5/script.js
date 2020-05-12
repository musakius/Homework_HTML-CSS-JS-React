let ms = 0;
let sec = 0;
let min = 0;
let init = 0;
let stat = 0;
let clocktimer;
let text = document.getElementById("time");
let blockNum = document.getElementById("num");
let block = document.getElementById("result");
let butClear = document.getElementById('but_clear');
let butStart = document.getElementById('but_start');
let butCircle = document.getElementById('but_circle');



function start() {
    ms++;
    if (ms > 60) {
        sec++;
        ms = ms - 60;
    }
    if (sec > 60) {
        min++;
        sec = sec - 60;
    }
    if (ms.toString().length == 1) ms = '0' + ms;
    if (sec.toString().length == 1) sec = '0' + sec;
    if (min.toString().length == 1) min = '0' + min;
    text.innerHTML = (min + ':' + sec + ':' + ms);
    clocktimer = setTimeout(start, 1000 / 60);
}

butStart.addEventListener('click', function () {
    if (init == 0) {
        stop();
        start();
        init = 1;
        butStart.value = "Пауза";
        butClear.value = "Круг";
    } else {
        clearTimeout(clocktimer);
        init = 0;
        butStart.value = "Старт";
        butClear.value = "Сброс";
    }
});

butClear.addEventListener('click', function () {
    if (butClear.value == "Круг" && stat < 9) {
        let elem = document.createElement('p');
        let num = document.createElement('p');
        stat++;
        num.innerHTML = stat;
        elem.innerHTML = text.innerHTML;
        blockNum.append(num);
        block.append(elem);
        text.innerHTML = ((min = 0) + ':' + (sec = 0) + ':' + (ms = 0));
        text.innerHTML = "00:00:00";
    } else if (butClear.value == "Сброс"){
        clearTimeout(clocktimer);
        text.innerHTML = ((min = 0) + ':' + (sec = 0) + ':' + (ms = 0));
        text.innerHTML = "00:00:00";
        init = 0;
        num.innerHTML = '';
        result.innerHTML = '';
        stat = 0;
    }
});





































/* butStart.addEventListener('click', function () {
    document.body.style.background = "green";
    
        setTimeout(function counter() {
            this.time = setTimeout(counter, 1000 / 60);
            ms++;
            if (ms > 60) {
                sec++;
                ms = ms - 60;
            }
            if (sec > 60) {
                min++;
                sec = sec - 60;
            }
            if (ms.toString().length == 1) ms = '0' + ms;
            if (sec.toString().length   == 1) sec   = '0' + sec;
            if (min.toString().length   == 1) min   = '0' + min;
            input.value = (min + ':' + sec + ':' + ms);
        }, 10);
}); */