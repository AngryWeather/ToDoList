import { generateProject } from "./mainContent";
import { newTaskPopUp, renderNewProject } from "./mainContent";
import { setActiveTab } from "./index.js";
import { Project, projects } from "./newProject";


function addEventListenerNewTask() {
    const newTaskButton = document.querySelector(".heading-button-container");
    newTaskButton.addEventListener("click", newTaskPopUp);
}

function addEventListenerAddTask() {
    const addTaskButton = document.querySelector(".add-cancel-container > button:first-child");
    addTaskButton.addEventListener("click", addTask);
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

function addTask(e) {
    console.log("add Task");
    const description = document.querySelector("#description");

}

function newProject(e) {
    const value = document.querySelector(".content-div > input").value;
    const id = document.querySelectorAll(".project-buttons").length;
    const project = new Project(value, id);
    Project.allProjects.push(project);
    console.log(Project.allProjects);

    renderNewProject(project);
}

function currentProject(e) {
    const activeProject = e.target.id;
    console.log(Project.allProjects);
    console.log("Active: " + activeProject);
    generateProject(e);
}

export { addEventListenerProjects };
export { addEventListenerNewTask };
export { addEventListenerNewProject };
export { addEventListenerAddTask };