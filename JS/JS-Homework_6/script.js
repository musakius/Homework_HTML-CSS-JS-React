console.log(0.1 + 0.2);

let text = document.querySelector('.window');
let btnBlock = document.querySelector('.btn_block');
let equals = document.querySelector('.equals_to');
let form = document.querySelector('form');
let arr = [];
let mass = [];
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let p6 = document.querySelector('.p6');
let ol = document.querySelector('.ol');
let history = document.querySelector('.history');
let init = 0;
let init2 = 0;



btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.value == '1') { // '1'
        text.value = text.value + 1;
    } else if (event.target && event.target.value == '2') { // '2'
        text.value = text.value + 2;
    } else if (event.target && event.target.value == '3') { // '3'
        text.value = text.value + 3;
    } else if (event.target && event.target.value == '4') { // '4'
        text.value = text.value + 4;
    } else if (event.target && event.target.value == '5') { // '5'
        text.value = text.value + 5;
    } else if (event.target && event.target.value == '6') { // '6'
        text.value = text.value + 6;
    } else if (event.target && event.target.value == '7') { // '7'
        text.value = text.value + 7;
    } else if (event.target && event.target.value == '8') { // '8'
        text.value = text.value + 8;
    } else if (event.target && event.target.value == '9') { // '9'
        text.value = text.value + 9;
    } else if (event.target && event.target.value == '0') { // '0'
        text.value = text.value + 0;
    } else if (event.target && event.target.value == '.') { // '.'
        text.value = text.value + '.';
    } else if (event.target && event.target.value == '+') { // '+'
        text.value = text.value + '+';
    } else if (event.target && event.target.value == '-') { // '-'
        text.value = text.value + '-';
    } else if (event.target && event.target.value == '×') { // '*'
        text.value = text.value + '*';
    } else if (event.target && event.target.value == '÷') { // '/'
        text.value = text.value + '/';
    } else if (event.target && event.target.value == '=') { // '='
        if (init2 == 1) {
            init2 = 0;
        } else if (init2 == 0) {
        let result;
        seve(text.value);
        result = text.value;
        result = eval(result);
        if (result == 0.30000000000000004) {
            result = 0.3;
        } else if (result == Infinity) {
            result = 0;
        }
        res(result);
        text.value = result;
        }
    } else if (event.target && event.target.value == '%') { // '%'
        text.value = text.value + '%';
    } else if (event.target && event.target.value == 'Clear') { // 'clear'
        text.value = '';
    } else if (event.target && event.target.value == 'x^y') { // '**'
        text.value = text.value + '**';
    } else if (event.target && event.target.value == 'sin') { // 'sin'
        text.value = 'sin(' + text.value + ')';
        init2 = 1;
        equals.onclick = function () {
            seve(text.value);
            let num = Number(text.value.replace(/\D+/g, ""));
            num = Math.sin(num);
            res(num); 
            text.value = num; 
        };
    } else if (event.target && event.target.value == 'cos') { // 'cos'
        text.value = 'cos(' + text.value + ')';
        init2 = 1;
        equals.onclick = function () {
            seve(text.value);
            let num = Number(text.value.replace(/\D+/g, ""));
            num = Math.cos(num);
            res(num); 
            text.value = num;
        };
    } else if (event.target && event.target.value == 'tg') { // 'tg'
        text.value = 'tg(' + text.value + ')';
        init2 = 1;
        equals.onclick = function () {
            seve(text.value);
            let num = Number(text.value.replace(/\D+/g, ""));
            num = Math.tan(num);
            res(num); 
            text.value = num;
        };
    } else if (event.target && event.target.value == 'ctg') { // 'ctg'
        text.value = 'ctg(' + text.value + ')';
        init2 = 1;
        equals.onclick = function () {
            seve(text.value);
            let num = Number(text.value.replace(/\D+/g, ""));
            num = 1 / Math.tan(num);
            res(num); 
            text.value = num;
        };
    } else if (event.target && event.target.value == 'rad') { // 'rad'
        text.value = 'radians(' + text.value + ')';
        init2 = 1;
        equals.onclick = function () {
            seve(text.value);
            let num = Number(text.value.replace(/\D+/g, ""));
            num = (Math.PI * num) / 180;
            res(num); 
            text.value = num;
        };
    } else if (event.target && event.target.value == 'deg') { // 'deg'
        text.value = 'degrees(' + text.value + ')';
        init2 = 1;
        equals.onclick = function () {
            seve(text.value);
            let num = Number(text.value.replace(/\D+/g, ""));
            num = (num * 180) / Math.PI;
            res(num); 
            text.value = num;
        };
    } else if (event.target && event.target.value == 'a!') { // 'a!'
        text.value = 'factorial(' + text.value + ')';
        init2 = 1;
        equals.onclick = function () {
            seve(text.value);
        let num = Number(text.value.replace(/\D+/g, ""));
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        res(factorial);
            text.value = factorial;
        };
    }

});

history.addEventListener('click', function() {
    if (init == 0) {
        init = 1;
        ol.style.display = 'block';
        history.value = "Close history";
    } else {
        init = 0;
        ol.style.display = 'none';
        history.value = "Open history";
    }

            

});


function seve(text) {
    if (arr.length > 1) {
        arr.push(text);
        p1.innerHTML = arr[0];
        p2.innerHTML = arr[1];
        p3.innerHTML = arr[2];
        arr.shift();
    } else if (arr.length > 0) {
        arr.push(text);
        p1.innerHTML = arr[0];
        p2.innerHTML = arr[1];
    } else {
        arr.push(text);
        p1.innerHTML = arr[0];
    }
}

function res(result) {
    if (mass.length > 1) {
        mass.push(result);
        p4.innerHTML = '=' + mass[0];
        p5.innerHTML = '=' + mass[1];
        p6.innerHTML = '=' + mass[2];
        mass.shift();
    } else if (mass.length > 0) {
        mass.push(result);
        p4.innerHTML = '=' + mass[0];
        p5.innerHTML = '=' + mass[1];
    } else {
        mass.push(result);
        p4.innerHTML = '=' + mass[0];
    }
}
