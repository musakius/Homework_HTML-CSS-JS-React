function toDoList() {
  let inputTaskSearch = document.querySelectorAll("input")[0];
  let inputAddTask = document.querySelectorAll("input")[1];
  let addTaskButtun = document.querySelector(".add_task_buttun");
  let ulSpisok = document.querySelector("ul");

  function addTask(text) {
    let li = document.createElement("li");

    let p = document.createElement("p");
    p.innerHTML = text;

    ulSpisok.appendChild(li).append(p);
  }

  inputAddTask.addEventListener("keypress", function(keyPressed) {
    if (keyPressed.which === 13 && this.value != "" && this.value.length < 20) {
      addTask(this.value);
      this.value = "";
    }
  });

  addTaskButtun.addEventListener("click", function() {
    if (inputAddTask.value != "" && inputAddTask.value.length < 20) {
      addTask(inputAddTask.value);
      inputAddTask.value = "";
    }
  });

  fetch("https://rn-todo-app-c27d4.firebaseio.com/todos.json")
    .then(result => result.json())
    .then(function(data) {
      for (let key in data) {
        let title = data[key];
        for (let text in title) {
          addTask(title[text]);
        }
      }
    });

  function searchCheck(elem, value) {
    return elem.startsWith(value);
  }

  inputTaskSearch.addEventListener("input", function() {
    let AllLi = document.querySelectorAll("li");
    for (let elem of AllLi) {
      let p = elem.firstElementChild;

      if (!searchCheck(p.innerHTML, this.value)) {
        // элементы вернувшие false переделываем в true.
        elem.style.display = "none"; // И делаем для их display = none. эти комменты я написал сам для себя))
      }
      if (this.value == "") {
        elem.style.display = "block";
      }
    }
  });
}
toDoList();
