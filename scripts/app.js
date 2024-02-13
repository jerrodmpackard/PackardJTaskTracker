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

let newObject = {
    taskName: "",
    date: "",
    description: "",
    priority: "",
    status: ""
}

addTaskBtn.addEventListener("click", () => {

    newObject = {
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

    toDoColumn.textContent = "";
    inProgressColumn.textContent = "";
    completedColumn.textContent = "";

    tasks.map(task => {
        let pName = document.createElement("h1");
        let pDate = document.createElement("p");
        let pDescription = document.createElement("p");
        let pPriority = document.createElement("p");
        let pStatus = document.createElement("p");

        pName.textContent = task.taskName;
        pDescription.textContent = task.description;
        pDate.textContent = `Due: ${task.date}`;
        pPriority.textContent = `Priority: ${task.priority}`;
        pStatus.textContent = task.status;

        if (task.status == "To-Do") {
            toDoColumn.append(pName);
            toDoColumn.append(pDescription);
            toDoColumn.append(pDate);
            toDoColumn.append(pPriority);
            // toDoColumn.append(pStatus);
        } else if (task.status == "In Progress") {
            inProgressColumn.append(pName);
            inProgressColumn.append(pDescription);
            inProgressColumn.append(pDate);
            inProgressColumn.append(pPriority);
            // inProgressColumn.append(pStatus);
        } else {
            completedColumn.append(pName);
            completedColumn.append(pDescription);
            completedColumn.append(pDate);
            completedColumn.append(pPriority);
            // completedColumn.append(pStatus);
        }
    });

}

displayTasks();

// need to create 5 elements for each of the 5 info points and also 1 button
// need to map through newObject.priority. need if statement to see where to create the element