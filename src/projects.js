import { generateProject } from "./mainContent";
import { newTaskPopUp } from "./mainContent";
import { Project } from "./newProject";
import { newProjectForm } from "./mainContent";


function addEventListenerNewTask() {
    const newTaskButton = document.querySelector(".heading-button-container");
    newTaskButton.addEventListener("click", newTaskPopUp);
}

function addEventListenerProjects() {
    const addProjectButton = document.querySelector(".add-project");
    addProjectButton.addEventListener("click", newProjectForm);
    const projectButtons = document.querySelectorAll(".project-buttons");
    projectButtons.forEach((button) => {
        button.addEventListener("click", currentProject);
    });
}

// function createProject(e) {
//     const project = new Project(`${e.target.}`);
//     console.log(project.name)
// }

function currentProject(e) {
    generateProject(e);
}

export { addEventListenerProjects };
export { addEventListenerNewTask };