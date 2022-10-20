import { generateProject } from "./mainContent";
import { newTaskPopUp, renderNewProject } from "./mainContent";
import { setActiveTab } from "./index.js";
import { Project, projects } from "./newProject";


function addEventListenerNewTask() {
    const newTaskButton = document.querySelector(".heading-button-container");
    newTaskButton.addEventListener("click", newTaskPopUp);
}

function addEventListenerNewProject() {
    const newProjectButton = document.querySelector(".new-project-button");
    newProjectButton.addEventListener("click", newProject);
}

function addEventListenerProjects() {
    const addProjectButton = document.querySelector(".add-project");
    addProjectButton.addEventListener("click", setActiveTab);

    const projectButtons = document.querySelectorAll(".project-buttons");
    projectButtons.forEach((button) => {
        button.addEventListener("click", currentProject);
    });
}

function newProject(e) {
    const value = document.querySelector(".content-div > input").value;
    const project = new Project(value);
    Project.allProjects.push(project);
    console.log(Project.allProjects);

    renderNewProject(e);
}

function currentProject(e) {
    generateProject(e);
}

export { addEventListenerProjects };
export { addEventListenerNewTask };
export { addEventListenerNewProject };