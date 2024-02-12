import { saveToLocalStorage, getLocalStorage } from "./localstorage.js";

let taskName = document.getElementById('taskName');
let date = document.getElementById('date');
let description = document.getElementById('description');
let priority = document.getElementById('priority');
let status = document.getElementById('status');
let addTaskBtn = document.getElementById('addTaskBtn');
let toDoColumn = document.getElementById('toDoColumn');
let inProgressColumn = document.getElementById('inProgressColumn');
let completedColumn = document.getElementById('completedColumn');


addTaskBtn.addEventListener("click", () => {

    const newObject = {
        taskName: taskName.value,
        date: date.value,
        description: description.value,
        priority: priority.value,
        status: status.value
    }

    saveToLocalStorage(newObject);

    displayTasks();

});

const displayTasks = () => {
    let tasks = getLocalStorage();

    let pName = document.createElement("p");
    let pDate = document.createElement("p");
    let pDescription = document.createElement("p");
    let pPriority = document.createElement("p");
    let pStatus = document.createElement("p");

    pName.textContent = newObject.taskName;
    pDate.textContent = newObject.date;
    pDescription.textContent = newObject.description;
    pPriority.textContent = newObject.priority;
    pStatus.textContent = newObject.status;

    tasks.map(task => {
        if(task.priority == "To-Do"){
            toDoColumn.append(pName);
            toDoColumn.append(pDate);
            toDoColumn.append(pDescription);
            toDoColumn.append(pPriority);
            toDoColumn.append(pStatus);
        } else if(task.priority == "In Progress"){
            inProgressColumn.append(pName);
            inProgressColumn.append(pDate);
            inProgressColumn.append(pDescription);
            inProgressColumn.append(pPriority);
            inProgressColumn.append(pStatus);
        } else {
            completedColumn.append(pName);
            completedColumn.append(pDate);
            completedColumn.append(pDescription);
            completedColumn.append(pPriority);
            completedColumn.append(pStatus);
        }
    });

}

// displayTasks();

// need to create 5 elements for each of the 5 info points and also 1 button
// need to map through newObject.priority. need if statement to see where to create the element