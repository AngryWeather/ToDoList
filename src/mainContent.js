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
    const main = document.querySelector("main");
    clearContent();

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
 
    const removeProject = document.createElement("button");
    removeProject.textContent = "Remove";
    removeProject.addEventListener("click", function(e) {


        if (!activeProject) {
            return false;
        }
        let nextActiveProject;
 
        if ((!Project.projects[Number(activeProject.id - 1)])
            && (!Project.projects[Number(activeProject.id + 1)])) {
                const headingButtonContainer = document.querySelector(".heading-button-container");

                if (headingButtonContainer.childElementCount != 4) {
                    const error = document.createElement("p");
                    error.textContent = "Can't have 0 projects!";
                    headingButtonContainer.appendChild(error);
                }
                return false;
            } else if (!Project.projects[Number(activeProject.id - 1)]) {
                nextActiveProject = Project.projects[Number(activeProject.id + 1)]
            } else {
                nextActiveProject = Project.projects[Number(activeProject.id - 1)];      
            }

        removeProjectButton(activeProject.id);
        Project.projects.splice(Number(activeProject.id), 1);
        Project.setProjects();

        resetIds();

        function resetIds() {
            for (let i = 0; i < Project.projects.length; i++) {
                Project.projects[i].id = i;
                const projectButtons = document.querySelectorAll(".project-buttons");
                projectButtons[i].id = String(i);
            }
        }

        if (!nextActiveProject) {
            return false;
        } else {
            generateProject(nextActiveProject);
        }
    })
    headingButtonContainer.appendChild(removeProject);

    addEventListenerNewTask();
   
    const tasksContainer = document.createElement("div");
    tasksContainer.classList.toggle("tasks-container");
    contentDiv.appendChild(tasksContainer);

    activeProject.tasks.forEach((task) => {
        const checkboxContainer = document.createElement("div");
        checkboxContainer.classList.toggle("checkbox-container");
        tasksContainer.appendChild(checkboxContainer);

        const taskInput = document.createElement("input");
        taskInput.type = "checkbox";
        taskInput.value = `${task.description}`;
        taskInput.id = `${task.description}`;
        taskInput.checked = task.done;
        taskInput.addEventListener("change", function(e) {
            task.done = e.target.checked;
            Project.setProjects();
        })


        const taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", taskInput.id);
        taskLabel.textContent = taskInput.value;
        
        checkboxContainer.appendChild(taskInput);
        checkboxContainer.appendChild(taskLabel);

        const dueDateContainer = document.createElement("div");
        checkboxContainer.appendChild(dueDateContainer);

        const dueDateLabel = document.createElement("p");
        dueDateLabel.textContent = "Due date: ";
        dueDateContainer.appendChild(dueDateLabel);

        const dueDateGet = document.createElement("p");
        dueDateGet.textContent = `${task.dueDate}`;
        dueDateContainer.appendChild(dueDateGet);

        const priorityContainer = document.createElement("div");
        checkboxContainer.appendChild(priorityContainer);

        const priorityLabel = document.createElement("p");
        priorityLabel.textContent = "Priority: ";
        priorityContainer.appendChild(priorityLabel);

        const priorityGet = document.createElement("p");
        priorityGet.textContent = `${task.priority}`;
        priorityContainer.appendChild(priorityGet);

        const removeContainer = document.createElement("div");
        removeContainer.classList.toggle("remove-container");
        checkboxContainer.appendChild(removeContainer);

        const removeLabel = document.createElement("p");
        removeLabel.textContent = "Remove:";
        removeContainer.appendChild(removeLabel);
        
        const removeButton = document.createElement("button");
        removeButton.addEventListener("click", function(e) {
            activeProject.removeTask(activeProject.tasks.indexOf(task));
            generateProject(activeProject);
        });
        removeButton.textContent = "X";

        removeContainer.appendChild(removeButton);
    })

}

function newTaskPopUp() {
    // remove "Can't have 0 projects error"
    const headingButtonContainer = document.querySelector(".heading-button-container");
    if (headingButtonContainer.childElementCount === 4) {
        const error = document.querySelector(".heading-button-container > p")
        headingButtonContainer.removeChild(error);
    }

    const contentDiv = document.querySelector(".content-div");
    const newTaskContainer= document.createElement("div");
    newTaskContainer.classList.toggle("new-task-container");
    contentDiv.appendChild(newTaskContainer);

    const form = document.createElement("form");
    newTaskContainer.appendChild(form);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    descriptionLabel.setAttribute("for", "description");
    form.appendChild(descriptionLabel);

    const descriptionInput = document.createElement("input");
    descriptionInput.required = true;
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    form.appendChild(descriptionInput);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due date:";
    dueDateLabel.setAttribute("for", "due-date");
    form.appendChild(dueDateLabel);

    const dueDate = document.createElement("input");
    dueDate.required = true;
    dueDate.type = "date";
    dueDate.id = "due-date";
    form.appendChild(dueDate);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    priorityLabel.setAttribute("for", "priority");
    form.appendChild(priorityLabel);

    const radioContainer = document.createElement("div");
    radioContainer.classList.toggle("radio-container");
    form.appendChild(radioContainer);

    const lowPriority = document.createElement("input");
    lowPriority.required = true;
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
    mediumPriority.required = true;
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
    highPriority.required = true;
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
    form.appendChild(addCancelContainer);

    const addTaskButton = document.createElement("button");
    addTaskButton.type = "submit";
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
    const projects = document.createElement("button");
    projects.textContent = "Add Project";
    projects.classList.toggle("add-project");

    const defaultButtons = [];
    defaultButtons.push(projects);
    // assign id to deafult personal project
    if (!Project.projects) {
        const personal = document.createElement("button");
        personal.textContent = "Personal";
        personal.classList.toggle("project-buttons")
        personal.classList.toggle("active-project");
        const personalId = document.querySelectorAll(".project-buttons").length;
        personal.id = `${personalId}`;
        Project.projects.push(new Project(personal.textContent, personalId));
        Project.setProjects();
        defaultButtons.push(personal);
    }

    return defaultButtons;
}

function newProjectForm() {
    const contentDiv = document.querySelector(".content-div");

    const newProjectInput = document.createElement("input");
    newProjectInput.type = "text";
    newProjectInput.classList.toggle("new-project-input");
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

    const projectButton = document.createElement("button");
    projectButton.classList.toggle("project-buttons");
    projectButton.textContent = project.name;
    projectButton.id = project.id;
    buttonsContainer.appendChild(projectButton);

    addEventListenerProjects();
}

function removeProjectButton(index) {
    const buttonsContainer = document.querySelector(".buttons-container");    
    const buttonToRemove = document.querySelector(`[id='${index}']`);
    buttonsContainer.removeChild(buttonToRemove);
}

export{ createMain };
export { generateProject };
export { newTaskPopUp };
export { newProjectForm };
export { createContentDiv };
export { renderNewProject };
export { removeAddTask };