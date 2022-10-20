import { addEventListenerNewProject, addEventListenerNewTask, addEventListenerProjects } from "./projects";
import { clearContent } from "./index.js";
import { Project } from "./newProject";
import { addEventListenerAddTask } from "./projects";


function createMain() {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    body.appendChild(main);

    main.appendChild(createMenuDiv());
    main.appendChild(createContentDiv());
}

function createMenuDiv() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.toggle("menu-div");
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.toggle("buttons-container");
    menuDiv.appendChild(buttonsContainer);

    const defaultButtons = addDefaultButtons();
    // add default buttons to container
    defaultButtons.forEach((button) => {
        buttonsContainer.appendChild(button);
    });

    return menuDiv; 
}

function generateProject(activeProject) {
    clearContent();
    const main = document.querySelector("main");

    const contentDiv = createContentDiv();
    main.appendChild(contentDiv);

    const headingButtonContainer = document.createElement("div");
    headingButtonContainer.classList.toggle("heading-button-container");
    contentDiv.appendChild(headingButtonContainer);

    const projectHeading = document.createElement("h2");
    projectHeading.textContent = activeProject.name;
    headingButtonContainer.appendChild(projectHeading);

    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    newTaskButton.tabindex = "0";
    headingButtonContainer.appendChild(newTaskButton);

    addEventListenerNewTask();
   
    activeProject.tasks.forEach((task) => {
        const taskInput = document.createElement("input");
        taskInput.type = "checkbox";
        taskInput.value = `${task.description}`;
        taskInput.id = `${task.description}`;

        const taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", taskInput.id);
        taskLabel.textContent = taskInput.value;
        
        contentDiv.appendChild(taskInput);
        contentDiv.appendChild(taskLabel);
    })

}
``
function newTaskPopUp() {
    const contentDiv = document.querySelector(".content-div");
    const newTaskContainer= document.createElement("div");
    newTaskContainer.classList.toggle("new-task-container");
    contentDiv.appendChild(newTaskContainer);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    descriptionLabel.setAttribute("for", "description");
    newTaskContainer.appendChild(descriptionLabel);

    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    newTaskContainer.appendChild(descriptionInput);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due date:";
    dueDateLabel.setAttribute("for", "due-date");
    newTaskContainer.appendChild(dueDateLabel);

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.id = "due-date";
    newTaskContainer.appendChild(dueDate);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    priorityLabel.setAttribute("for", "priority");
    newTaskContainer.appendChild(priorityLabel);

    const radioContainer = document.createElement("div");
    radioContainer.classList.toggle("radio-container");
    newTaskContainer.appendChild(radioContainer);

    const lowPriority = document.createElement("input");
    lowPriority.id = "low";
    lowPriority.type = "radio";
    lowPriority.name = "priority";
    lowPriority.value = "low";
    radioContainer.appendChild(lowPriority);

    const lowPriorityLabel = document.createElement("label");
    lowPriorityLabel.textContent = "Low";
    lowPriorityLabel.setAttribute("for", "low");
    radioContainer.appendChild(lowPriorityLabel);

    const mediumPriority = document.createElement("input");
    mediumPriority.id = "medium";
    mediumPriority.value = "medium";
    mediumPriority.type = "radio";
    mediumPriority.name = "priority";
    radioContainer.appendChild(mediumPriority);

    const mediumPriorityLabel = document.createElement("label");
    mediumPriorityLabel.textContent = "Medium";
    mediumPriorityLabel.setAttribute("for", "medium");
    radioContainer.appendChild(mediumPriorityLabel);

    const highPriority = document.createElement("input");
    highPriority.id = "high";
    highPriority.value = "high";
    highPriority.type = "radio";
    highPriority.name = "priority";
    radioContainer.appendChild(highPriority);

    const highPriorityLabel = document.createElement("label");
    highPriorityLabel.textContent = "High";
    highPriorityLabel.setAttribute("for", "high");
    radioContainer.appendChild(highPriorityLabel);

    const addCancelContainer = document.createElement("div");
    addCancelContainer.classList.toggle("add-cancel-container");
    newTaskContainer.appendChild(addCancelContainer);

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    addCancelContainer.appendChild(addTaskButton);

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    addCancelContainer.appendChild(cancelButton);

    addEventListenerAddTask();
}

function removeAddTask() {
    const contentDiv = document.querySelector(".content-div");
    const newTaskContainer = document.querySelector(".new-task-container");
    contentDiv.removeChild(newTaskContainer);
}

// create default buttons here and handle custom ones in another function
function addDefaultButtons() {
    const upcoming = document.createElement("button");
    upcoming.textContent = "Upcoming";
    const projects = document.createElement("button");
    projects.textContent = "Add Project";
    projects.classList.toggle("add-project");
    const personal = document.createElement("button");
    personal.textContent = "Personal";
    personal.classList.toggle("project-buttons")

    // assign id to deafult personal project
    const personalId = document.querySelectorAll(".project-buttons").length;
    Project.allProjects.push(new Project(personal.textContent, personalId));
    personal.id = `${personalId}`;

    return [upcoming, projects, personal];
}

function newProjectForm() {
    const contentDiv = document.querySelector(".content-div");

    const newProjectInput = document.createElement("input");
    newProjectInput.type = "text";
    contentDiv.appendChild(newProjectInput);
    
    const newProjectButton = document.createElement("button");
    newProjectButton.classList.toggle("new-project-button");
    newProjectButton.textContent = "Add";
    contentDiv.appendChild(newProjectButton);

    addEventListenerNewProject();
}

function createContentDiv() {
    const contentDiv = document.createElement("div");
    contentDiv.classList.toggle("content-div");
    return contentDiv;
}

function renderNewProject(project) {
    const buttonsContainer = document.querySelector(".buttons-container");
    // const newProjectInput = document.querySelector(".content-div > input").value;
    

    const projectButton = document.createElement("button");
    projectButton.classList.toggle("project-buttons");
    projectButton.textContent = project.name;
    projectButton.id = project.id;
    buttonsContainer.appendChild(projectButton);

    addEventListenerProjects();
}

export{ createMain };
export { generateProject };
export { newTaskPopUp };
export { newProjectForm };
export { createContentDiv };
export { renderNewProject };
export { removeAddTask };