function editBandit(i) {
    display("create_person");
    document.getElementById("textFirstName").value = [i].firstName;
    document.getElementById("select_body").options[document.getElementById("select_body").selectedIndex].text = arrBandits[i].typeBody;
    document.getElementById("select_wheel").options[document.getElementById("select_wheel").selectedIndex].text = arrBandits[i].typeWheel;
    document.getElementById("select_engine").options[document.getElementById("select_engine").selectedIndex].text = arrBandits[i].typeEngine;
    document.getElementById("select_suspension").options[document.getElementById("select_suspension").selectedIndex].text = arrBandits[i].typeSuspension;
    document.getElementById("select_transmission").options[document.getElementById("select_transmission").selectedIndex].text = arrBandits[i].transmission;
    document.getElementById("select_car").options[document.getElementById("select_car").selectedIndex].text = arrBandits[i].typeCar;
    document.getElementById("select_flashers").options[document.getElementById("select_flashers").selectedIndex].text = arrBandits[i].flashers;
    document.getElementById("select_loudspeaker").options[document.getElementById("select_loudspeaker").selectedIndex].text = arrBandits[i].loudspeaker;
    document.getElementById("select_nitrogen").options[document.getElementById("select_nitrogen").selectedIndex].text = arrBandits[i].nitrogen;
    document.getElementById("select_bodyKit").options[document.getElementById("select_bodyKit").selectedIndex].text = arrBandits[i].bodyKit;
    document.getElementById("select_trunk").options[document.getElementById("select_trunk").selectedIndex].text = arrBandits[i].trunk;
    document.getElementById("select_armchair").options[document.getElementById("select_armchair").selectedIndex].text = arrBandits[i].armchair;
    deleteBandit(i, arrBandits);
    document.getElementById("mainMenu").style.display = "none";
}





function printDetailedInfo(i) {
    let form = document.getElementById("all_info").getElementsByTagName("form");
    if (arrBandits[i].typeCar == "Пассажирское") {
        form[0].innerHTML = "";
        form[0].innerHTML += '<div class="detailInfo">' +
            '<p class="p_info">Номер авто: ' + arrBandits[i].firstName + '</p>' +
            '<p class="p_info">Тип кузова: ' + arrBandits[i].typeBody + '</p>' +
            '<p class="p_info">Тип резины: ' + arrBandits[i].typeWheel + '</p>' +
            '<p class="p_info">Тип двигателя: ' + arrBandits[i].typeEngine + '</p>' +
            '<p class="p_info">Тип подвески: ' + arrBandits[i].typeSuspension + '</p>' +
            '<p class="p_info">Тип коробки передач: ' + arrBandits[i].transmission + '</p>' +
            '<h4>Дополнительные опции</h4>' +
            '<p id="p_dop">Тип богажника:' + arrBandits[i].trunk + '</p>' +
            '<p id="p_dop">Тип детского кресла: ' + arrBandits[i].armchair + '</p>' +
            '<input type="button" class="buttons" id="mainMenu2" value="◄ Вернуться ко всем авто">' +
            '</div>';
        document.getElementById("mainMenu2").addEventListener("click", function () {
            display("information");
        });
    } else if (arrBandits[i].typeCar == "Спортивное") {
        form[0].innerHTML = "";
        form[0].innerHTML += '<div class="detailInfo">' +
            '<p class="p_info">Номер авто: ' + arrBandits[i].firstName + '</p>' +
            '<p class="p_info">Тип кузова: ' + arrBandits[i].typeBody + '</p>' +
            '<p class="p_info">Тип резины: ' + arrBandits[i].typeWheel + '</p>' +
            '<p class="p_info">Тип двигателя: ' + arrBandits[i].typeEngine + '</p>' +
            '<p class="p_info">Тип подвески: ' + arrBandits[i].typeSuspension + '</p>' +
            '<p class="p_info">Тип коробки передач: ' + arrBandits[i].transmission + '</p>' +
            '<h4>Дополнительные опции</h4>' +
            '<p id="p_dop">Вид турбины: ' + arrBandits[i].nitrogen + '</p>' +
            '<p id="p_dop">Вид обвеса: ' + arrBandits[i].bodyKit + '</p>' +
            '<input type="button" class="buttons" id="mainMenu2" value="◄ Вернуться ко всем авто">' +
            '</div>';
        document.getElementById("mainMenu2").addEventListener("click", function () {
            display("information");
        });
    } else if (arrBandits[i].typeCar == "Oперативное") {
        form[0].innerHTML = "";
        form[0].innerHTML += '<div class="detailInfo">' +
            '<p class="p_info">Номер авто: ' + arrBandits[i].firstName + '</p>' +
            '<p class="p_info">Тип кузова: ' + arrBandits[i].typeBody + '</p>' +
            '<p class="p_info">Тип резины: ' + arrBandits[i].typeWheel + '</p>' +
            '<p class="p_info">Тип двигателя: ' + arrBandits[i].typeEngine + '</p>' +
            '<p class="p_info">Тип подвески: ' + arrBandits[i].typeSuspension + '</p>' +
            '<p class="p_info">Тип коробки передач: ' + arrBandits[i].transmission + '</p>' +
            '<h4>Дополнительные опции</h4>' +
            '<p id="p_dop">Вид мигалки: ' + arrBandits[i].flashers + '</p>' +
            '<p id="p_dop">Вид громкоговорителя: ' + arrBandits[i].loudspeaker + '</p>' +
            '<input type="button" class="buttons" id="mainMenu2" value="◄ Вернуться ко всем авто">' +
            '</div>';
        document.getElementById("mainMenu2").addEventListener("click", function () {
            display("information");
        });
    }

}
///////////7
let form = document.getElementById("information").getElementsByTagName("form");
form[0].innerHTML = '<br>';
fetch('http://localhost:3000/cars')
    .then(function (response) {
        console.log(response);
        response.json().then(data => {
            console.log(data.length);
            for (let j = 0; j < data.length - 1; j++) {
                console.log(data[j]);
                for (let i = 0; i < data[data.length - 1].length - 1; i++) {
                    console.log(data[j][i]);
                    form[0].innerHTML += '<div class="car_create">' +
                        '<div class="text_info">' +
                        '<p class="p_text">Номер авто: ' + data[j][i]._firstName + '</p>' +
                        '<hr>' +
                        '<p class="p_text">Тип авто: ' + data[j][i]._typeCar + '</p>' +
                        '</div>' +
                        '<div class="text_create">' +
                        '<p class="text1" id="details' + i + '">Подробнее</p>' +
                        '<p class="text2" id="edit' + i + '">Редактировать</p>' +
                        '<p class="text3" id="remove' + i + '">Удалить</p>' +
                        '</div>' +
                        '</div>';
                }
            }
            form[0].innerHTML += '<br>' +
                '<input type="button" id="newBanditButton" class="buttons" value="Добавить новое авто123">';
            for (let j = 0; j < data.length - 1; j++) {
                for (let i = 0; i < data[data.length - 1].length -1; i++) {
                    let edit = 'edit' + i;
                    let remove = 'remove' + i;
                    let details = 'details' + i;

                    document.getElementById(details).addEventListener("click", function () {
                        printDetailedInfo(i, arrBandits); /// redact
                        display("all_info");
                    });

                    document.getElementById(edit).addEventListener("click", function () {
                        editBandit(i);
                    });
                    document.getElementById(remove).addEventListener("click", function () {
                        if (confirm("Вы уверены, что хотите удалить инофрмацию о " +
                                data[j][i]._typeCar + " " + data[j][i]._firstName + "?")) { //redact
                            delete data[j][i];

                        } else {

                        }

                    });

                }
            }
            document.getElementById("newBanditButton").addEventListener("click", function () {
                display("create_person");
                document.getElementById("createPerson").style.display = "";
            });
        });
    })
    .catch(error => {
        console.log(error)
    });

function display(visibleId) {

    switch (visibleId) {
        case "create_person":
            document.getElementById("information").style.display = "none";
            document.getElementById("all_info").style.display = "none";
            document.getElementById("create_person").style.display = "flex";
            break;
        case "all_info":
            document.getElementById("information").style.display = "none";
            document.getElementById("all_info").style.display = "flex";
            document.getElementById("create_person").style.display = "none";
            break;
        case "information":
        default:
            document.getElementById("information").style.display = "flex";
            document.getElementById("all_info").style.display = "none";
            document.getElementById("create_person").style.display = "none";
    }
}

function displaySelect(item) {

    switch (item) {
        case "pass":
            document.getElementById("item3").style.display = "none";
            document.getElementById("item2").style.display = "none";
            document.getElementById("item1").style.display = "block";
            break;
        case "sport":
            document.getElementById("item3").style.display = "none";
            document.getElementById("item2").style.display = "block";
            document.getElementById("item1").style.display = "none";
            break;
        case "oper":
        default:
            document.getElementById("item3").style.display = "block";
            document.getElementById("item2").style.display = "none";
            document.getElementById("item1").style.display = "none";
    }
}

function checkRadio() {
    var options = document.getElementsByName('option_car');
    for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
            return (options[i].value);
        }
    }
}

async function post() {
    console.log(arrBandits);
    fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(arrBandits)
    });
}
let i = -1;
let serverInfo = document.getElementById("server_info");
async function get() {
    let response = await fetch('http://localhost:3000/cars');
    let commits = await response.json();
    if (i == -1) {
        i = 0;
    } else if (i == 0) {
        i = 1;
    } else {
        i++;
    }
    serverInfo.innerHTML =
        '<p class="p_server">Номер: ' + commits[commits.length - 1][i]._firstName + '</p>' +
        '<p class="p_server">Кузов: ' + commits[commits.length - 1][i]._typeBody + '</p>' +
        '<p class="p_server">Резина: ' + commits[commits.length - 1][i]._typeWheel + '</p>' +
        '<p class="p_server">Двигатель: ' + commits[commits.length - 1][i]._typeEngine + '</p>' +
        '<p class="p_server">Подвеска: ' + commits[commits.length - 1][i]._typeSuspension + '</p>' +
        '<p class="p_server">Коробка: ' + commits[commits.length - 1][i]._transmission + '</p>';
}
get();
let arrBandits = [];
display("information");


document.getElementById("createPerson").addEventListener("click", function () {
    document.getElementById("mainMenu").style.display = "";


    let firstName = document.getElementById("textFirstName").value;
    let typeBody = document.getElementById("select_body").options[document.getElementById("select_body").selectedIndex].text;
    let typeWheel = document.getElementById("select_wheel").options[document.getElementById("select_wheel").selectedIndex].text;
    let typeEngine = document.getElementById("select_engine").options[document.getElementById("select_engine").selectedIndex].text;
    let typeSuspension = document.getElementById("select_suspension").options[document.getElementById("select_suspension").selectedIndex].text;
    let transmission = document.getElementById("select_transmission").options[document.getElementById("select_transmission").selectedIndex].text;
    let typeCar = document.getElementById("select_car").options[document.getElementById("select_car").selectedIndex].text;
    let flashers = document.getElementById("select_flashers").options[document.getElementById("select_flashers").selectedIndex].text;
    let loudspeaker = document.getElementById("select_loudspeaker").options[document.getElementById("select_loudspeaker").selectedIndex].text;
    let nitrogen = document.getElementById("select_nitrogen").options[document.getElementById("select_nitrogen").selectedIndex].text;
    let bodyKit = document.getElementById("select_bodyKit").options[document.getElementById("select_bodyKit").selectedIndex].text;
    let trunk = document.getElementById("select_trunk").options[document.getElementById("select_trunk").selectedIndex].text;
    let armchair = document.getElementById("select_armchair").options[document.getElementById("select_armchair").selectedIndex].text;
    let type = checkRadio();
    if (firstName.length == '') {
        document.getElementById("textFirstName").placeholder = 'Введите номер';
    } else if (typeCar == "Тип авто") {
        document.getElementById("select_car").style.color = "red";
        document.getElementById("select_car").options[1].style.color = "black";
        document.getElementById("select_car").options[2].style.color = "black";
        document.getElementById("select_car").options[3].style.color = "black";
    } else {
        switch (type) {
            case "oper":
                arrBandits[arrBandits.length] = new OperationalCar(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission, flashers, loudspeaker);
                console.log(arrBandits);
                post();
                display("information");
                alert("Добавил нового");
                break;
            case "sport":
                arrBandits[arrBandits.length] = new SportCar(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission, nitrogen, bodyKit);
                post();
                display("information");
                alert("Добавил нового");
                break;
            case "pass":
                arrBandits[arrBandits.length] = new PassCar(firstName, typeCar, typeBody, typeWheel, typeEngine, typeSuspension, transmission, trunk, armchair);
                post();
                display("information");
                alert("Добавил нового");
                break;
        }
        
    }
});

document.getElementById("mainMenu").addEventListener("click", function () {
    display("information");
});

document.getElementById("select_car").addEventListener("change", function () {
    document.getElementById("mainMenu").style.display = "";
    let type = checkRadio();
    switch (type) {
        case "oper":
            displaySelect("oper");
            break;
        case "sport":
            displaySelect("sport");
            break;
        case "pass":
            displaySelect("pass");
            break;
    }
});