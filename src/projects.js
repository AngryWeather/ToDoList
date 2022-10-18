import { generateProject } from "./mainContent";
import { newTaskPopUp } from "./mainContent";

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

class Task {
    constructor(description, dueDate, priority) {
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// function defaultPersonalProject() {

// }

function addEventListenerNewTask() {
    const newTaskButton = document.querySelector(".heading-button-container");
    newTaskButton.addEventListener("click", newTaskPopUp);
}

function addEventListenerProjects() {
    const projectButtons = document.querySelectorAll(".project-buttons");
    projectButtons.forEach((button) => {
        button.addEventListener("click", generateProject);
    });
}

export { addEventListenerProjects };
export { addEventListenerNewTask };