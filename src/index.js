import { createHeader } from "./header";
import { createMain, newProjectForm, createContentDiv, generateProject } from "./mainContent";
import { addEventListenerProjects } from "./projects";
import { Project } from "./newProject";
import { renderNewProject, addDefaultButtons } from "./mainContent";


createHeader();
createMain();
    if (Project.projects.length) {
        for (let i = 0; i < Project.projects.length; i++) {
            Project.allProjects.push(new Project(Project.projects[i].name, Project.projects[i].id));

            for (let j = 0; j < Project.projects[i].tasks.length; j++) {
                Project.allProjects[i].tasks.push(Project.projects[i].tasks[j]);
            }
            renderNewProject(Project.allProjects[i]);
        }
    }

// const firstButton = document.querySelector(".buttons-container > button:nth-child(2)");
// firstButton.classList.add("active-project");
generateProject(Project.allProjects[0]);
addEventListenerProjects();

const main = document.querySelector("main");

function setActiveTab(e) {
    let activeTab = e.target.textContent;
    clearContent();
    main.appendChild(createContentDiv());
    switch (activeTab) {
        case "Add Project":
            newProjectForm();
            break;
    }
}

function clearContent() {
    const main = document.querySelector("main");
    const contentDiv = document.querySelector(".content-div");
    main.removeChild(contentDiv);
}

export { setActiveTab };
export { clearContent };