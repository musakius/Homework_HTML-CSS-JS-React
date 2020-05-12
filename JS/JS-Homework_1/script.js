"use strict";

let styleNew = document.querySelectorAll('.container > div')

function addStyle() {
	for (let elem of styleNew) {
		elem.style.backgroundColor = 'rgb(172, 139, 50)';
		elem.style.border = '5px solid rgb(80, 64, 19)';
		elem.style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
	  }
	  document.body.style.backgroundColor = "rgb(249, 255, 193)";
}

var block = document.getElementById("block1");
var blockNone = document.getElementById("block2");

function addBlock(){
    if(block.style.display == "flex"){
		block.style.display = "none";
		blockNone.style.display = "block";
    }
}

var term = {Belarus: 15, Poland: 19, Ukraine: 17, Latvia: 16, Lithuania: 16, Russia: 13};
var termsum = 0;

for (var key in term) {
    var termsum = termsum + term[key];
    var result = termsum / (Object.keys(term).length);
}

function termMax(term) {
  return Math.max(term['Belarus'], term['Poland'], term['Ukraine'], term['Latvia'], term['Lithuania'], term['Russia']);
}

alert(result + '°C - средняя температура');
alert(termMax(term) + '°C - максимальная температура');