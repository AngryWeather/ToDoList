import { addEventListenerNewTask } from "./projects";


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

function generateProject(e) {
    const contentDiv = document.querySelector(".content-div");

    const headingButtonContainer = document.createElement("div");
    headingButtonContainer.classList.toggle("heading-button-container");
    contentDiv.appendChild(headingButtonContainer);

    const projectHeading = document.createElement("h2");
    projectHeading.textContent = e.target.textContent;
    headingButtonContainer.appendChild(projectHeading);

    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    newTaskButton.tabindex = "0";
    headingButtonContainer.appendChild(newTaskButton);

    addEventListenerNewTask();
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

    const radioContainer = document.createElement("div");
    radioContainer.classList.toggle("radio-container");
    newTaskContainer.appendChild(radioContainer);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    priorityLabel.setAttribute("for", "priority");
    radioContainer.appendChild(priorityLabel);

    const lowPriority = document.createElement("input");
    lowPriority.id = "low";
    lowPriority.type = "radio";
    lowPriority.name = "priority";
    radioContainer.appendChild(lowPriority);

    const lowPriorityLabel = document.createElement("label");
    lowPriorityLabel.textContent = "Low";
    lowPriorityLabel.setAttribute("for", "low");
    radioContainer.appendChild(lowPriorityLabel);

    const mediumPriority = document.createElement("input");
    mediumPriority.id = "medium";
    mediumPriority.type = "radio";
    mediumPriority.name = "priority";
    radioContainer.appendChild(mediumPriority);

    const mediumPriorityLabel = document.createElement("label");
    mediumPriorityLabel.textContent = "Medium";
    mediumPriorityLabel.setAttribute("for", "medium");
    radioContainer.appendChild(mediumPriorityLabel);

    const highPriority = document.createElement("input");
    highPriority.id = "high";
    highPriority.type = "radio";
    highPriority.name = "priority";
    radioContainer.appendChild(highPriority);

    const highPriorityLabel = document.createElement("label");
    highPriorityLabel.textContent = "High";
    highPriorityLabel.setAttribute("for", "high");
    radioContainer.appendChild(highPriorityLabel);
}

// create default buttons here and handle custom ones in another function
function addDefaultButtons() {
    const upcoming = document.createElement("button");
    upcoming.textContent = "Upcoming";
    const projects = document.createElement("button");
    projects.textContent = "Add Project";
    const personal = document.createElement("button");
    personal.textContent = "Personal";
    personal.classList.toggle("project-buttons")
    return [upcoming, projects, personal];
}

function createContentDiv() {
    const contentDiv = document.createElement("div");
    contentDiv.classList.toggle("content-div");
    return contentDiv;
}
export{ createMain };
export { generateProject };
export { newTaskPopUp };