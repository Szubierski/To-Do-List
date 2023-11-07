let addBtn, toDoInput, toDoList, errorMsg, newTask, defaultTask, taskText, doneBtn, editBtn, deleteBtn, popup, confirmBtn, cancelBtn, newTaskText, tempText, ifEmpty;

const main = () => {
    getDOMElements();
    prepareDOMEvents();
}

const getDOMElements = () => {
    addBtn = document.querySelector(".addBtn");
    doneBtn = document.querySelector(".done");
    toDoInput = document.querySelector(".toDoInput");
    toDoList = document.querySelector(".taskList");
    errorMsg = document.querySelector(".errorMsg");
    defaultTask = document.querySelector(".defaultTask");
    popup = document.querySelector(".popup");
    confirmBtn = document.querySelector(".confirmBtn");
    confirmBtn = document.querySelector(".cancelBtn");
    newTaskText = document.querySelector(".newText");
}

const prepareDOMEvents = () => {
    addBtn.addEventListener("click", addNewTask);
    toDoList.addEventListener("click", checkClick);
    popup.addEventListener("click", checkClickPopup);
    toDoInput.addEventListener("keyup", enterKeyCheck);
    newTaskText.addEventListener("keyup", enterKeyCheck);
}

const addNewTask = () => {
    if(toDoInput.value != '') {
        errorMsg.textContent = "";
        toDoInput.style.border = "none";
        defaultTask.remove();
        toDoInput.style.backgroundColor = "rgb(255, 255, 255)";
        newTask = document.createElement("div");
        newTask.classList.add("task");
        toDoList.append(newTask);
        taskText = document.createElement("p");
        taskText.classList.add("text");
        taskText.textContent = toDoInput.value;
        newTask.append(taskText);
        newTask.innerHTML += '<button class="btn done material-symbols-outlined">done</button><button class="btn edit">EDIT</button><button class="btn delete material-symbols-outlined">close</button>'
        toDoInput.value = "";
    }
    else {
        errorMsg.textContent = "Wpisz tereść zadania!"
        toDoInput.style.border = "solid red 2px"
        toDoInput.style.backgroundColor = "rgb(254, 177, 177)";
    }
}

const editingValidator = () => {
    if(newTaskText.value != "") {
        tempText.textContent = newTaskText.value;
        newTaskText.value = "";
        newTaskText.style.border = "none";
        newTaskText.style.backgroundColor = "rgb(255, 255, 255)";
        popup.classList.toggle("display");
    }
    else {
        console.log("das");
        newTaskText.style.border = "solid red 2px";
        newTaskText.style.backgroundColor = "rgb(254, 177, 177)";
    }
}

const checkClick = (e) => {
    if(e.target.matches(".done")) {
        e.target.previousElementSibling.classList.toggle("completed");
        e.target.classList.toggle("gray");
    } else if(e.target.matches(".edit")) {
        popup.classList.remove("display");
        tempText = e.target.previousElementSibling.previousElementSibling;
    } else if(e.target.matches(".delete")) {
        e.target.closest("div").remove();
    }
}

const checkClickPopup = (e) => {
    if(e.target.matches(".confirmBtn")) {
        editingValidator();
    } else if(e.target.matches(".cancelBtn")) {
        popup.classList.toggle("display");
    }
}

const enterKeyCheck = (e) => {
    if(e.key === "Enter") {
        if(e.target.matches(".toDoInput")) {
            addNewTask();
        }
        else if(e.target.matches(".newText")) {
            editingValidator();
        }
    }
}

document.addEventListener("DOMContentLoaded", main);