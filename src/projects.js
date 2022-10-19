import { generateProject } from "./mainContent";
import { newTaskPopUp } from "./mainContent";
import { setActiveTab } from "./index.js";


function addEventListenerNewTask() {
    const newTaskButton = document.querySelector(".heading-button-container");
    newTaskButton.addEventListener("click", newTaskPopUp);
}

function addEventListenerNewProject() {
    const newProjectButton = document.querySelector(".new-project-button");
    newProjectButton.addEventListener("click", createProject);
}

function addEventListenerProjects() {
    const addProjectButton = document.querySelector(".add-project");
    addProjectButton.addEventListener("click", setActiveTab);

    const projectButtons = document.querySelectorAll(".project-buttons");
    projectButtons.forEach((button) => {
        button.addEventListener("click", currentProject);
    });
}

function createProject(e) {
    const buttonsContainer = document.querySelector(".buttons-container");
    const newProjectInput = document.querySelector(".content-div > input").value;

    const projectButton = document.createElement("button");
    projectButton.classList.toggle("project-buttons");
    projectButton.textContent = newProjectInput;
    buttonsContainer.appendChild(projectButton);
}

function currentProject(e) {
    generateProject(e);
}

export { addEventListenerProjects };
export { addEventListenerNewTask };
export { addEventListenerNewProject };