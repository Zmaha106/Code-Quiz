var buttonEl = document.querySelector("#save-answer");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);

var timerEl = document.querySelector(".timer");
var countdown = 90;

function setTime() {
    var timerInterval = setInterval(function () {
        countdown--;
        timerEl.textContent = `Time:${countdown}s`;

        
        }
    }, 1000);
