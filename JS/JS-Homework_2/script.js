
var inputData = document.querySelector("input[type = 'text']");
var ulSpisok = document.querySelector("ul");
var ps = document.getElementsByTagName("p");
let blockRemove = document.getElementsByClassName('blockRemove');
let spanDate = document.querySelectorAll('spanDate');
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var NameAuthor = document.getElementById("myName");
var section = document.querySelector('section');
let get = document.getElementById("window");



/* let x = new Date();
let second = x. getSeconds();
if (second <= 10) {
    second = '0' + second;
}
let hourse = x.getHours();
if (hourse <= 10) {
    hourse = '0' + hourse;
}
let minute = x.getMinutes();
if (minute <= 10) {
    minute = '0' + minute;
}
let date = x.getDate();
if (date <= 10) {
    date = '0' + date;
}
let month = x.getMonth() + 1;
if (month <= 10) {
    month = '0' + month;
}
let year = x.getFullYear();
let timeTasks = hourse + ":" + minute + ":" + second;
let dateTasks = date + "-" + month + "-" + year; */


function deleteTodo() {
    for (let div of blockRemove) {
        div.addEventListener('click', function () {
            div.parentElement.remove();
            event.stopPropagation();
        })
    }
}


/* function strikeTodo() {
    for (let p of ps) {
        p.addEventListener('click', function () {
            p.style.textDecoration = 'line-through';
            p.style.color = "black";
        })
        
    }
} */
/*  if (p.style.textDecoration == 'line-through') {
            p.addEventListener('click', function () {
                p.style.textDecoration = 'none';
            })
        }  */



/* function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ulSpisok.innerHTML = localStorage.getItem('todoList');
    }

    deleteTodo();
    strikeTodo();
} */

inputData.addEventListener('keypress', function (keyPressed) {
    if (keyPressed.which === 13 && this.value != '' && this.value.length < 20) {
        var liNew = document.createElement("li");

        var spanNewT = document.createElement("span");
        spanNewT.className = "spanTime";
        
        var spanNewD = document.createElement("span");
        spanNewD.className = "spanDate";

        var svgNew = document.createElement("span");
        svgNew.className = "blockRemove";
        svgNew.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        
        var pNew = document.createElement("p");
        
        var newTodo = this.value;
        this.value = "";

            ulSpisok.appendChild(liNew).append(pNew, spanNewT, spanNewD, svgNew);
            pNew.append(newTodo);
            spanNewT.append(timeTasks);
            spanNewD.append(dateTasks);
            deleteTodo();
            strikeTodo();
        
    }
})

/* saveBtn.addEventListener("click", function () {
    localStorage.setItem('todoList', ulSpisok.innerHTML);
})

clearBtn.addEventListener('click', function () {
    ulSpisok.innerHTML = "";
    localStorage.setItem('todoList', ulSpisok.innerHTML);
}) */

/* NameAuthor.onclick = function(){
    openWindow()
}; */

/* function openWindow(){
    if(get.style.display == "none"){
        get.style.display = "flex";
    }
    else{
        get.style.display = "none";
    }
} */
/* function clouseWindow(){
    get.style.display = "none";
} */


deleteTodo();

loadTodo();

strikeTodo();

