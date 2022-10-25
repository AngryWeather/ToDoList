import { generateProject, removeAddTask } from "./mainContent";
import { newTaskPopUp, renderNewProject } from "./mainContent";
import { Project} from "./newProject";
import { Task } from "./tasks";
import { setActiveTab } from "./index";

function addEventListenerNewTask() {
    const newTaskButton = document.querySelector(".heading-button-container > button");
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
    const activeProject = Project.projects[Number(document.querySelector(".active-project").id)];

    if (!document.querySelector("#description").value ||
        !document.querySelector("#due-date").value ||
        !document.querySelector("input[name=priority]:checked")) {
            return false;
        } else {
            const description = document.querySelector("#description").value;
            const dueDate = document.querySelector("#due-date").value;
            const priority = document.querySelector("input[name=priority]:checked").value;
        
            activeProject.tasks.push(new Task(description, dueDate, priority));
            Project.setProjects();
            removeAddTask();
            generateProject(activeProject);
        }
}

function newProject(e) {
    const value = document.querySelector(".content-div > input").value;
    const id = document.querySelectorAll(".project-buttons").length;
    const idString = String(id);
    const project = new Project(value, id);
    Project.projects.push(project);
    Project.setProjects();

    generateProject(project);
    renderNewProject(project);
    const activeProject = document.querySelector(`[id='${idString}']`);

    document.querySelectorAll(".project-buttons").forEach((button) => {
        button.classList.remove("active-project");
    });
    activeProject.classList.toggle("active-project");

}

function currentProject(e) {
    document.querySelectorAll(".project-buttons").forEach((button) => {
        button.classList.remove("active-project");
    });
    e.target.classList.add("active-project");
    const project = Project.projects[Number(e.target.id)];
    generateProject(project);
}

export { addEventListenerProjects };
export { addEventListenerNewTask };
export { addEventListenerNewProject };
export { addEventListenerAddTask };