import { generateProject, removeAddTask } from "./mainContent";
import { newTaskPopUp, renderNewProject } from "./mainContent";
import { setActiveTab } from "./index.js";
import { Project} from "./newProject";
import { Task } from "./tasks";

function addEventListenerNewTask() {
    const newTaskButton = document.querySelector(".heading-button-container");
    newTaskButton.addEventListener("click", newTaskPopUp);
}

function addEventListenerAddTask() {
    const addTaskButton = document.querySelector(".add-cancel-container > button:first-child");
    addTaskButton.addEventListener("click", addTask);
    const cancelButton = document.querySelector(".add-cancel-container > button:nth-child(2)");
    cancelButton.addEventListener("click", removeAddTask);
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
    const activeProject = Project.allProjects[Number(document.querySelector(".active-project").id)];
    console.log("add Task");
    console.log(activeProject);
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector("input[name=priority]:checked").value;

    activeProject.tasks.push(new Task(description, dueDate, priority));
    removeAddTask();
    console.log(activeProject.tasks);
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
    document.querySelectorAll(".project-buttons").forEach((button) => {
        button.classList.remove("active-project");
    })
    e.target.classList.add("active-project");
    const project = Project.allProjects[Number(e.target.id)];
    generateProject(project);
}

export { addEventListenerProjects };
export { addEventListenerNewTask };
export { addEventListenerNewProject };
export { addEventListenerAddTask };