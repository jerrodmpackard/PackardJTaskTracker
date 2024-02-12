// Need to create elements to add tasks to the to-do section
// add IDs to each form input

let taskName = document.getElementById('taskName');
let date = document.getElementById('date');
let description = document.getElementById('description');
let priority = document.getElementById('priority');
let status = document.getElementById('status');
let addTask = document.getElementById('addTask');


addTask.addEventListener("click", () => {
    let p = document.createElement("p");
    p.textContent = taskName.value;
})